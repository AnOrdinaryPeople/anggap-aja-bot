module.exports = {
    name: 'mindo',
    description: 'Show random Indonesian meme',
    cooldown: 3,
    usage: '\`=mindo\`',
    aliases: ['mi'],
    execute(m, args, d) {
        const Twitter = require('twitter'),
            client = new Twitter({
                consumer_key: d[1].twitter.api.key,
                consumer_secret: d[1].twitter.api.secret,
                access_token_key: d[1].twitter.token.access,
                access_token_secret: d[1].twitter.token.secret
            }),
            rand = n => Math.floor(Math.random() * n),
            name = [
                { user_id: 744314137, screen_name: 'MemeComicIndo', count: 100 },
                { user_id: 491057617, screen_name: 'onecak', count: 100 },
                { user_id: 823404426, screen_name: 'tahilalats', count: 100 }
            ]

        client.get('statuses/user_timeline', name[rand(name.length)], (err, tweets, resp) => {
            var next = true,
                data = tweets[rand(tweets.length)]

            while (next) {
                data.entities.media === undefined
                    ? data = tweets[rand(tweets.length)]
                    : next = false
            }

            return m.channel.send(new d[0].MessageEmbed()
                .setColor('#3490dc')
                .setTitle(data.text)
                .setDescription(data.user.name)
                .setURL(data.entities.media[0].url)
                .setImage(data.entities.media[0].media_url_https))
        })
    }
}