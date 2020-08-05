const c_json = require('../command.json').server

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
    usage: c_json.usage,
    aliases: c_json.aliases,
    execute(m, args, d) {
        const img = `https://cdn.discordapp.com/icons/${m.guild.id}/${m.guild.icon}.png`

        d[1].log ? console.log(`[${d[2].get()}] ${img}`) : ''

        return m.channel.send(new d[0].MessageEmbed()
            .setColor('#3490dc')
            .setTitle(m.guild.name)
            .setThumbnail(img)
            .addFields(
                { name: '\u200B', value: '\u200B' },
                { name: 'Region', value: m.guild.region },
                { name: 'Boost Level', value: `${m.guild.premiumTier} (${m.guild.premiumSubscriptionCount} Boosts)` },
                { name: 'Created At', value: d[2].get(m.guild.joinedTimestamp) },
                { name: 'Total Member', value: m.guild.memberCount }
            )
        )
    }
}
