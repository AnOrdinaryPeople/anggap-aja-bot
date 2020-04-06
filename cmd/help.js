module.exports = {
    name: 'help',
    description: 'Show all commands',
    usage: '\`=help\`',
    aliases: ['h', 'helep'],
    execute(m, args, d) {
        const fs = require('fs'),
            fetch = require('node-fetch')
        var obj = []

        for (const file of fs.readdirSync('./cmd').filter(f => f.endsWith('.js'))) {
            const f = require(`./${file}`)

            obj.push({ name: `=${f.name}`, value: f.description })
        }

        return fetch(`https://discordapp.com/api/users/${d[1].client}`, {
            headers: {
                Authorization: `Bot ${d[1].token}`
            }
        })
            .then(resp => resp.json())
            .then(resp =>
                m.channel.send(new d[0].MessageEmbed()
                    .setColor('#3490dc')
                    .setTitle(resp.username)
                    .setDescription(`v${require('../package.json').version}`)
                    .setThumbnail(`https://cdn.discordapp.com/avatars/${resp.id}/${resp.avatar}.png`)
                    .addField('\u200B', '\u200B')
                    .addFields(obj)
                )
            )
    }
}