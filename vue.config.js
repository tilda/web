// TODO: fix this. see #13
/* const ctxReplacement = require('webpack').ContextReplacementPlugin
const contacts = import('./src/static/contacts.mjs')

function getAllUsedIcons() {
    let icons = []
    for (let socials; socials in contacts;) {
        icons.push(socials.icon)
    }
    return icons.join('|')
}

module.exports = {
    configureWebpack: {
        plugins: [
            new ctxReplacement(
                /simple-icons[/\\]icons$/,
                new RegExp(`/${getAllUsedIcons()}/`)
            )
        ]
    }
} */