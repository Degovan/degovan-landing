/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  env: {
    API_URL: "https://backend.degovan.my.id/api/",
  },
};

export default nextConfig;
