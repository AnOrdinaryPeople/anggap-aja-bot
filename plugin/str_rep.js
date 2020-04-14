const env = require('../config.json')

module.exports = {
    rep(str) {
        const trigger = "\\$",
            list = [
                { name: 'ACTIVITY.NAME', val: env.activity.name },
                { name: 'ACTIVITY.TYPE', val: env.activity.type },
                { name: 'CMD', val: env.cmd },
                { name: 'LOG', val: env.log }
            ]
        let result = ''

        for (key of list) {
            const regex = new RegExp(trigger + key.name + trigger, 'g')

            result = result !== ''
                ? result.replace(regex, key.val)
                : str.replace(regex, key.val)
        }

        return result
    }
}
