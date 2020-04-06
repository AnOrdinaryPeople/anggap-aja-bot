module.exports = {
    name: 'avatar',
    description: 'Show avatar from tagged user',
    usage: '\`=avatar\` or \`=avatar mention_user\`',
    aliases: ['img', 'icon', 'pfp'],
    execute(m, args, d) {
        const data = m.mentions.users.size ? m.mentions.users.first() : m.author

        return m.channel.send(new d[0].MessageEmbed()
            .setColor('#3490dc')
            .setTitle(data.username + '\'s avatar')
            .setImage(data.displayAvatarURL({ format: 'png', dynamic: true }))
        )
    }
}
