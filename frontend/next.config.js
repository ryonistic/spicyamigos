/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {

  async redirects() {
    return [
      {
        source: '/login',
          destination: 'http://127.0.0.1:8000/login/',
        permanent: true
      },
      {
        source: '/register',
          destination: 'http://127.0.0.1:8000/register/',
        permanent: true
      },
      {
        source: '/logout',
          destination: 'http://127.0.0.1:8000/logout/',
        permanent: true
      }
 
    ];
  },
  nextConfig,
};
