const c_json = require('../command.json').meme

/**
 * @constant c_json bring your custom config
 * like name, description, usage, and aliases
 * 
 * @param m PartialMessage
 * @param args arguments
 * @param d[0] module discord.js
 * @param d[1] bring object from config.json
 * @param d[2] just plugin/date.js mostly used for console.log()
 */

module.exports = {
    ...c_json,
    cooldown: 3,
    execute(m, args, d) {
        const fetch = require('node-fetch'),
            rand = n => Math.floor(Math.random() * n),
            req = `https://reddit.com/r/${args[0] || d[1].subreddit[rand(d[1].subreddit.length)]}.json`

        return fetch(req)
            .then(resp => resp.json())
            .then(res => res.data.children)
            .then(res => res.map(p => ({
                author: p.data.author,
                link: p.data.url,
                title: p.data.title,
                sub: p.data.subreddit,
                sauce: `https://reddit.com${p.data.permalink}`
            })))
            .then(res => {
                const data = res[rand(res.length)]

                if (d[1].log) {
                    console.log(`[${d[2].get()}] ${req}`)
                    console.log(`[${d[2].get()}] ${data.sauce}`)
                }

                return res.length
                    ? m.channel.send(new d[0].MessageEmbed()
                        .setColor('#3490dc')
                        .setURL(data.sauce)
                        .setTitle(data.title)
                        .setDescription(data.author)
                        .setImage(data.link)
                        .setFooter(data.sub))
                    : m.channel.send(new d[0].MessageEmbed()
                        .setColor('#3490dc')
                        .setTitle('Subreddit not found'))
            })
    }
}
