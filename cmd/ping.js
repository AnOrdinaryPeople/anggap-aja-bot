module.exports = {
    name: 'ping',
    description: 'Show bot ping',
    usage: '\`=ping\`',
    aliases: ['p'],
    execute(m, args, d) {
        return m.channel.send(new d[0].MessageEmbed()
            .setColor('#3490dc')
            .setDescription(`🏓 ${m.guild.shard.ping}ms`)
        )
    }
}
