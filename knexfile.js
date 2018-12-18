module.exports = {
  development: {
    client: 'pg',
    connection: 'postgresql://localhost/herefortreble'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL

  }
};
