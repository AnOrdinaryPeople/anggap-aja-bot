const c_json = require('../command.json').server

module.exports = {
    name: c_json.name,
    description: c_json.description,
    usage: c_json.usage,
    aliases: c_json.aliases,
    execute(m, args, d) {
        return m.channel.send(new d[0].MessageEmbed()
            .setColor('#3490dc')
            .setTitle(m.guild.name)
            .setThumbnail(`https://cdn.discordapp.com/icons/${m.guild.id}/${m.guild.icon}.png`)
            .addFields(
                { name: '\u200B', value: '\u200B' },
                { name: 'Region', value: m.guild.region },
                { name: 'Boost Level', value: `${m.guild.premiumTier} (${m.guild.premiumSubscriptionCount} Boosts)` },
                { name: 'Created At', value: new Date(m.guild.joinedTimestamp).toLocaleDateString('en-US', { dateStyle: 'medium' }) },
                { name: 'Total Member', value: m.guild.memberCount }
            )
        )
    }
}
