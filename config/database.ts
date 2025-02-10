import path from 'path';

export default () => {
  const client = 'postgres'; // Force PostgreSQL

  const connections = {
    postgres: {
      connection: {
        host: 'dpg-cukv0el6l47c73eejb80-a',
        port: 5432,
        database: 'new_sql_bh1s',
        user: 'new_sql_bh1s_user',
        password: '5fapOmB4SnhkBC0v4sbN6WAobrRlwebC',
        ssl: {
          rejectUnauthorized: false, // Required for Render PostgreSQL
        },
        schema: 'public',
      },
      pool: { min: 2, max: 10 },
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: 60000,
    },
  };
};
