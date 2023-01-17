const env = require('dotenv').config().parsed
console.log('ecosystem: ', env);

module.exports = ({
  apps: [
    {
      name: env.NAME1,
      script: env.SCRIPT,
      args: env.ARGS,
      env: {
        NODE_ENV: env.NAME1,
        HOST_PORT: env.HOST_PORT_TEST1,
        DATABASE_HOST_PRODUCTION: env.DATABASE_HOST_PRODUCTION1, 
        DATABASE_PORT_PRODUCTION: env.DATABASE_PORT_PRODUCTION1,
        DATABASE_USER_PRODUCTION: env.DATABASE_USER_PRODUCTION1,
        DATABASE_PASS_PRODUCTION: env.DATABASE_PASS_PRODUCTION1,
        DATABASE_NAME: env.DATABASE_NAME_TEST1,
        ADMIN_JWT_SECRET: env.ADMIN_JWT_SECRET,
        DOMAIN_URL: env.DOMAIN_URL1,
        DATABASE_SSL: env.DATABASE_SSL
      }
    },
    {
      name: env.NAME2,
      script: env.SCRIPT,
      args: env.ARGS,
      env: {
        NODE_ENV: env.NAME2,
        HOST_PORT: env.HOST_PORT_TEST2,
        DATABASE_HOST_PRODUCTION: env.DATABASE_HOST_PRODUCTION2,
        DATABASE_PORT_PRODUCTION: env.DATABASE_PORT_PRODUCTION2,
        DATABASE_USER_PRODUCTION: env.DATABASE_USER_PRODUCTION2, 
        DATABASE_PASS_PRODUCTION: env.DATABASE_PASS_PRODUCTION2,
        DATABASE_NAME: env.DATABASE_NAME_TEST2,
        ADMIN_JWT_SECRET:  env.ADMIN_JWT_SECRET,
        DOMAIN_URL: env.DOMAIN_URL2,
        DATABASE_SSL: env.DATABASE_SSL
      }
    },
    {
      name: env.NAME3,
      script: env.SCRIPT,
      args: env.ARGS,
      env: {
        NODE_ENV: env.NAME3,
        HOST_PORT: env.HOST_PORT_TEST3,
        DATABASE_HOST_PRODUCTION: env.DATABASE_HOST_PRODUCTION3,
        DATABASE_PORT_PRODUCTION: env.DATABASE_PORT_PRODUCTION3,
        DATABASE_USER_PRODUCTION: env.DATABASE_USER_PRODUCTION3, 
        DATABASE_PASS_PRODUCTION: env.DATABASE_PASS_PRODUCTION3,
        DATABASE_NAME: env.DATABASE_NAME_TEST3,
        ADMIN_JWT_SECRET:  env.ADMIN_JWT_SECRET,
        DOMAIN_URL: env.DOMAIN_URL3,
        DATABASE_SSL: env.DATABASE_SSL
      }
    }
  ]
});