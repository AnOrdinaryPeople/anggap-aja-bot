const fs = require('fs'),
    Discord = require('discord.js'),
    env = require('./config.json'),
    str_rep = require('./plugin/str_rep.js'),
    dt = require('./plugin/date.js'),
    c = new Discord.Client(),
    cooldown = new Discord.Collection()

c.commands = new Discord.Collection()

for (const file of fs.readdirSync('./cmd').filter(f => f.endsWith('.js'))) {
    const cmd = require(`./cmd/${file}`)
    c.commands.set(cmd.name, cmd)
}

c.once('ready', () => {
    console.log(`[${dt.get()}] Bot running`)
    c.user.setActivity(env.activity.name, { type: env.activity.type })
})

c.on('message', m => {
    if (!m.content.startsWith(env.cmd) || m.author.bot) return

    const args = m.content.slice(env.cmd.length).split(/ +/),
        command = args.shift().toLowerCase(),
        cmd = c.commands.get(command) || c.commands.find(cm => cm.aliases && cm.aliases.includes(command))

    if (!cmd) return

    if (cmd.args && !args.length) {
        let reply = `You didn't provide any arguments, ${m.author}!`

        cmd.usage ? reply += `\nThe proper usage would be: ${str_rep.rep(cmd.usage)}` : ''

        return m.channel.send(reply)
    }

    if (!cooldown.has(cmd.name))
        cooldown.set(cmd.name, new Discord.Collection())

    const now = Date.now(),
        timestamps = cooldown.get(cmd.name),
        cooldownAmount = (cmd.cooldown || 1) * 1000

    if (timestamps.has(m.author.id)) {
        const expire = timestamps.get(m.author.id) + cooldownAmount

        if (now < expire)
            return m.reply(`please wait ${(expire - now) / 1000} more second(s) before reusing the \`${cmd.name}\` command.`)
    }

    timestamps.set(m.author.id, now)
    setTimeout(() => {
        timestamps.delete(m.author.id)
    }, cooldownAmount)

    try {
        env.log ? console.log(`[${dt.get()}] [${m.author.username}] [${command}]${args.length ? ` [${args[0]}]` : ''}`) : ''

        if (args.length && args[0] === 'help')
            return m.channel.send(`${cmd.description} ${cmd.usage ? '\n**How to use:**\n' + str_rep.rep(cmd.usage) : ''}`)
        else cmd.execute(m, args, [Discord, env, dt])
    } catch (e) {
        console.error(e)
        m.reply('There was an error trying to execute that command!')
    }
})

c.login(env.token)
