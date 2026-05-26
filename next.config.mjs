/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true, // optional but recommended for static hosting
  images: {
    unoptimized: true, // required for static export
  },
};

export default nextConfig;