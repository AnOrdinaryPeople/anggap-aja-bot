const c_json = require('../command.json')

module.exports = {
    name: c_json[0].name,
    description: c_json[0].description,
    usage: c_json[0].usage,
    aliases: c_json[0].aliases,
    execute(m, args, d) {
        const data = m.mentions.users.size ? m.mentions.users.first() : m.author

        return m.channel.send(new d[0].MessageEmbed()
            .setColor('#3490dc')
            .setTitle(data.username + '\'s avatar')
            .setImage(data.displayAvatarURL({ format: 'png', dynamic: true }))
        )
    }
}
