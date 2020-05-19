let script = document.createElement('script')

const injectAnalytics = function() {
    script.src = 'https://shy.tda.wtf/ingress/ea409a8c-c531-42bd-af6d-5f44c32ab6d8/script.js'
}

const removeAnalytics = function () {
    script.src = null
}

// NOTE: This is here to just to satiate the linter.
// When using these functions, just import them directly
module.exports = { injectAnalytics, removeAnalytics }