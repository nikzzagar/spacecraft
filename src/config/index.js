const env = process.env.NODE_ENV || 'development'
const envConfig = require(`./${env}`).default
export default envConfig