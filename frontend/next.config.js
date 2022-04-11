/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {

  async redirects() {
    return [
      {
        source: '/login',
          destination: 'http://127.0.0.1:8000/api/v1/dj-rest-auth/login/',
        permanent: false
      },
   {
        source: '/register',
          destination: 'http://127.0.0.1:8000/api/v1/dj-rest-auth/registration/',
        permanent: false
      }
    
    ];
  },
    nextConfig,
};

