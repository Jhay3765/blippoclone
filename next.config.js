/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.blippo.com",
        port: "",
        pathname: "/cdn/**",
      },
    ],
  },
};

module.exports = nextConfig;
