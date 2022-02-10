module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ef4679239d5483292e41330cbb8d5eae'),
  },
});
