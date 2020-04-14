const c_json = require('../command.json').meme

module.exports = {
    name: c_json.name,
    description: c_json.description,
    cooldown: 3,
    usage: c_json.usage,
    aliases: c_json.aliases,
    execute(m, args, d) {
        const fetch = require('node-fetch'),
            rand = n => Math.floor(Math.random() * n)

        return fetch(`https://reddit.com/r/${args[0] || d[1].subreddit[rand(d[1].subreddit.length)]}.json`)
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
