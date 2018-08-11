const dgram = require("./dgram/index.js")

module.exports = {
    globals: {
        dgram
    },
    setupTestFrameworkScriptFile: "<rootDir>/dgram/setup.js"
}
