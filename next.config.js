/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "imgix",
    path: "public/images",
  },
};

module.exports = nextConfig;
