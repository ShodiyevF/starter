const { config } = require('dotenv')
require('reflect-metadata')

config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

