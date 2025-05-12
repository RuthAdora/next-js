/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https", // Or 'http' if your images are served over HTTP
        hostname: "encrypted-tbn3.gstatic.com",
        port: "", // Leave this empty if you're not using a custom port
        pathname: "**", // This allows any path within that domain
      },
    ],
  },
};

module.exports = nextConfig;
