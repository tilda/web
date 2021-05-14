/* eslint-disable no-unused-vars */
const INFO = [
    {
        "icon": "github",
        "url": "https://github.com/tilda"
    },
    {
        "icon": "gitlab",
        "url": "https://gitlab.com/wontfix"
    },

    {
        "icon": "twitter",
        "url": "https://twitter.com/imtilda"
    }
]

export default INFO.sort(function(a, b) {
    return a.length - b.length
})