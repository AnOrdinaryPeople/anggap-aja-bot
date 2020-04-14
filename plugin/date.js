module.exports = {
    get(dt = new Date(), locale = 'id-ID') {
        return new Date(dt).toLocaleString(locale).replace(/\//g, '-')
    }
}