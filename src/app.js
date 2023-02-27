const { CORS_OPTIONS } = require('./config/cors');
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

async function app(routes) {
    const app = express();
    const port = process.env.PORT || 3000;
    const action = process.env.NODE_ENV || 'development';

    function lister() {
        app.listen(port, () => {
            console.info('=================================');
            console.info(`======= ENV: ${action} =======`);
            console.info(`🚀 App listening on the port ${port}`);
            console.info('=================================');
        });
    }

    function initializeMiddlewares(){
        app.use(cors(CORS_OPTIONS))
        app.use(express.json())
        app.use(express.urlencoded({ extended: true }))
    }

    function initializeRoutes(routes) {
        routes.forEach(route => {
            app.use('/', route.router);
        });
    }
    
    async function runner() {
        await initializeMiddlewares()
        await initializeRoutes(routes)
        await lister()
    }

    runner()
}

module.exports = app