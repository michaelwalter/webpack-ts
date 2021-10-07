const webpack = require('webpack');
const serverConfig = require('./webpack/server');
const clientConfig = require('./webpack/client');
const nodemon = require('nodemon');

const mode = process.env.NODE_ENV || 'development';
let running = false;

webpack([
    {
        ...serverConfig ,
        watch: mode !== 'production',
    },
    {
        ...clientConfig,
        watch: mode !== 'production',
    },
], (error, stats) => {
    if (error) {
        console.error(error.stack || error);
        if (error.details) {
            console.error(error.details);
        }
        return;
    }

    const info = stats.toJson();

    if (stats.hasErrors()) {
        console.error(info.errors);
    }

    if (stats.hasWarnings()) {
        console.warn(info.warnings);
    }

    process.stdout.write(stats.toString() + '\n');

    if (!running && mode !== 'production') {
        running = true;
        nodemon({
            script: './dist/server/server.js'
        });
    }
});
