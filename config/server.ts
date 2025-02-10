module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['myKeyA', 'myKeyB']),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'MLSUfSIzEULEYLuVYDMIyhTMmzFwwAf6Xzk+1+QVcWk='),
    },
    url: "/admin", // Ensures the admin panel works
  },
});