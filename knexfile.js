module.exports = {
  development: {
    client: 'pg',
    connection: 'postgresql://localhost/<db_name>'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL

  }
};
