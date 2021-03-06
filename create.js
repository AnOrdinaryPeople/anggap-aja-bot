const arg = process.argv[2],
    desc = process.argv[3],
    usage = process.argv[4],
    fs = require('fs')

fs.writeFile(`./cmd/${arg}.js`, `const c_json = require('../command.json').${arg}

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
        // your idea goes here brrrrr....
    }
}
`, err => {
    if (err) throw err

    const cmd = require('./command.json')
    cmd[arg] = {
        "name": arg,
        "description": desc || "this command recently born!",
        "usage": usage || `$CMD$${arg} (for now just useless command)`,
        "aliases": []
    }
    fs.writeFile('./command.json', JSON.stringify(cmd, null, 4), err => {
        if (err) throw err

        console.log(`Created command ${arg}. Happy coding!`)
    })
})
