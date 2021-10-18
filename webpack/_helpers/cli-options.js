const { program } = require('commander')
const { OPTION } = require('./constants')

const options = program
    .option(OPTION.WATCH.DECLARATION, OPTION.WATCH.DESCRIPTION)
    .option(OPTION.MODE.DECLARATION, OPTION.MODE.DESCRIPTION, OPTION.MODE.DEFAULT)
    .parse(process.argv)
    .opts()

module.exports = options