/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["qiita-user-contents.imgix.net", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
