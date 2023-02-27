const pg = require('pg')

const pool = new pg.Pool({
    user: 'postgres',
    password: 'test',
    database: process.env.DB_NAME,
    host: 'localhost',
    port: 5432,
})

const uniqRow = async (query, ...arr) => {
    try {
        const client = await pool.connect()
        const data = await client.query(query, arr)
        client.release()
        return data
    } catch (error) {}
}

module.exports = {
    uniqRow
}