module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '557b3f5628b77c4dd5556f7919071e7a'),
  },
});
