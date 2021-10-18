const nodemon = require('nodemon')
const cliOptions = require('./cli-options')

const Nodemon = (() => {
    let instance = false;

    const initialize = () => {
        instance = nodemon({
            script: './dist/server/server.js'
        })
    }

    return {
        handle: () => {
            if (!instance) {
                initialize()
            }
        }
    }
})()

const NodemonHandler = () => {
    if (cliOptions.watch) {
        Nodemon.handle()
    }
}

module.exports = NodemonHandler