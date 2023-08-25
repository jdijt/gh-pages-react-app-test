/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/gh-pages-react-app-test",
  output: "export",
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
