const c_json = require('../command.json').help

module.exports = {
    name: c_json.name,
    description: c_json.description,
    usage: c_json.usage,
    aliases: c_json.aliases,
    execute(m, args, d) {
        const fs = require('fs'),
            fetch = require('node-fetch')
        var obj = []

        for (const file of fs.readdirSync('./cmd').filter(f => f.endsWith('.js'))) {
            const f = require(`./${file}`)

            obj.push({ name: `${d[1].cmd}${f.name}`, value: f.description })
        }

        return fetch(`https://discordapp.com/api/users/${d[1].client}`, {
            headers: {
                Authorization: `Bot ${d[1].token}`
            }
        })
            .then(resp => resp.json())
            .then(resp => {
                const img = `https://cdn.discordapp.com/avatars/${resp.id}/${resp.avatar}.png`

                if (d[1].log) {
                    var x = ''
                    for (var i = 0; i < d[1].client.length; i++)
                        x += 'X'

                    console.log(`[${d[2].get()}] https://discordapp.com/api/users/${x}`)
                    console.log(`[${d[2].get()}] ${img}`)
                }

                return m.channel.send(new d[0].MessageEmbed()
                    .setColor('#3490dc')
                    .setTitle(resp.username)
                    .setDescription(`v${require('../package.json').version}`)
                    .setThumbnail(img)
                    .addField('\u200B', '\u200B')
                    .addFields(obj)
                )
            })
    }
}
