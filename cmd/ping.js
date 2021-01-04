const c_json = require('../command.json').ping

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
    execute(m, args, d) {
        const ping = `${m.guild.shard.ping}ms`

        if (d[1].log) console.log(`[${d[2].get()}] ${ping}`)

        return m.channel.send(new d[0].MessageEmbed()
            .setColor('#3490dc')
            .setDescription(`🏓 ${ping}`)
        )
    }
}
