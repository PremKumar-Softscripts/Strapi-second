module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', process.env.PORT || 1337), // ✅ Use dynamic port
  app: {
    keys: env.array('APP_KEYS', ['myKeyA', 'myKeyB']),
  },
});
