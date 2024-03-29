const sql = require('mssql')

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  server: process.env.DB_SERVER,
  port: parseInt(process.env.DB_PORT, 10),
  options: {
    encrypt: true // Required for Azure SQL Database
  }
}

async function getConnection () {
  try {
    if (!global.connection) {
      global.connection = await sql.connect(config)
      console.log('Connected to Azure SQL Database')
    }
    return global.connection
  } catch (err) {
    console.error('Database connection failed', err)
    throw err
  }
}

module.exports = { getConnection }
