const c_json = require('../command.json').ping

module.exports = {
    name: c_json.name,
    description: c_json.description,
    usage: c_json.usage,
    aliases: c_json.aliases,
    execute(m, args, d) {
        const ping = `${m.guild.shard.ping}ms`

        d[1].log ? console.log(`[${d[2].get()}] ${ping}`) : ''

        return m.channel.send(new d[0].MessageEmbed()
            .setColor('#3490dc')
            .setDescription(`🏓 ${ping}`)
        )
    }
}
