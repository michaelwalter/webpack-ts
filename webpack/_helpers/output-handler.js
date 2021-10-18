const NodemonHandler = require('./nodemon-handler')

const errorHandler = (error) => {
    if (error) {
        if (error.stack) {
            console.error(error.stack)
        }

        if (error.details) {
            console.error(error.details)
        }

        console.log(error)

        process.exit()
    }
}

const statsHandler = (stats) => {
    console.log(stats.toString({
        colors: true,
        modules: false
    }), '\n')
}

const outputHandler = (error, stats) => {
    errorHandler(error)
    statsHandler(stats)
    NodemonHandler()
}

module.exports = outputHandler