const webpack = require('webpack')
const serverConfig = require('./webpack.server.config')
const clientConfig = require('./webpack.client.config')
const outputHandler = require('./_helpers/output-handler')

webpack([
    { ...serverConfig },
    { ...clientConfig },
], outputHandler)
