const c_json = require('../command.json').avatar

module.exports = {
    name: c_json.name,
    description: c_json.description,
    usage: c_json.usage,
    aliases: c_json.aliases,
    execute(m, args, d) {
        const data = m.mentions.users.size ? m.mentions.users.first() : m.author

        return m.channel.send(new d[0].MessageEmbed()
            .setColor('#3490dc')
            .setTitle(data.username + '\'s avatar')
            .setImage(data.displayAvatarURL({ format: 'png', dynamic: true }))
        )
    }
}
