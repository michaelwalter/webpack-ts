const path = require('path')

module.exports = {
    ROOT: {
        SERVER: path.resolve(__dirname, '../../', 'source/server'),
        CLIENT: path.resolve(__dirname, '../../', 'source/client')
    },
    OPTION: {
        WATCH: {
            DECLARATION: '-w, --watch',
            DESCRIPTION: 'Watching for changes option',
            DEFAULT: false
        },
        MODE: {
            DECLARATION: '-m, --mode',
            DESCRIPTION: 'Development/Production mode',
            DEFAULT: 'development'
        }
    }
}