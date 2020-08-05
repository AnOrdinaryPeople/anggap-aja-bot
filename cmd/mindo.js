const c_json = require('../command.json').mindo

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
    name: c_json.name,
    description: c_json.description,
    cooldown: 3,
    usage: c_json.usage,
    aliases: c_json.aliases,
    execute(m, args, d) {
        const Twitter = require('twitter'),
            client = new Twitter({
                consumer_key: d[1].twitter.api.key,
                consumer_secret: d[1].twitter.api.secret,
                access_token_key: d[1].twitter.token.access,
                access_token_secret: d[1].twitter.token.secret
            }),
            rand = n => Math.floor(Math.random() * n),
            name = d[1].twitter.tweets

        for (i of name) i.count = 100

        client.get('statuses/user_timeline', name[rand(name.length)], (err, tweets, resp) => {
            var next = true,
                data = tweets[rand(tweets.length)]

            while (next) {
                data.entities.media === undefined
                    ? data = tweets[rand(tweets.length)]
                    : next = false
            }
            if (d[1].log) {
                console.log(`[${d[2].get()}] ${resp.request.uri.href}`)
                console.log(`[${d[2].get()}] ${data.entities.media[0].url}`)
            }

            return m.channel.send(new d[0].MessageEmbed()
                .setColor('#3490dc')
                .setTitle(data.text.replace(/(https?:\/\/[^\s]+)/g, ''))
                .setDescription(data.user.name)
                .setURL(data.entities.media[0].url)
                .setImage(data.entities.media[0].media_url_https))
        })
    }
}