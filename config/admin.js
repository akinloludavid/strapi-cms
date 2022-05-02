module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '24a45ee3c5c4f560b8a94f360d6ff71e'),
  },
});
