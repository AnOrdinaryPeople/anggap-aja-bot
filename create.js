const arg = process.argv[2],
    desc = process.argv[3],
    usage = process.argv[4],
    fs = require('fs')

fs.writeFile(`./cmd/${arg}.js`, `const c_json = require('../command.json').${arg}

/**
 * @constant c_json bring your custom config
 * like name, description, usage, and aliases
 * 
 * @param m ParialMessage
 * @param args arguments
 * @param d[0] module discord.js
 * @param d[1] bring object from config.json
 * @param d[2] just plugin date mostly used for console.log()
 */

module.exports = {
    name: c_json.name,
    description: c_json.description,
    usage: c_json.usage,
    aliases: c_json.aliases,
    execute(m, args, d) {
        // your idea goes here brrrrr....
    }
}
`, err => {
    if (err) throw err

    const cmd = require('./command.json')
    cmd[arg] = {
        "name": arg,
        "description": desc ? desc : "this command recently born!",
        "usage": usage ? usage : `$CMD$${arg} (for now just useless command)`,
        "aliases": []
    }
    fs.writeFile('./command.json', JSON.stringify(cmd, null, 4), err => {
        if (err) throw err

        console.log(`Created command ${arg} happy coding!`)
    })
})
