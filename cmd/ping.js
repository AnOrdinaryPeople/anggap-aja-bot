const c_json = require('../command.json')

module.exports = {
    name: c_json[4].name,
    description: c_json[4].description,
    usage: c_json[4].usage,
    aliases: c_json[4].aliases,
    execute(m, args, d) {
        return m.channel.send(new d[0].MessageEmbed()
            .setColor('#3490dc')
            .setDescription(`🏓 ${m.guild.shard.ping}ms`)
        )
    }
}
