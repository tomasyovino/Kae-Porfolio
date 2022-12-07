/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
      },
    ],
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
  },
};

module.exports = nextConfig;
