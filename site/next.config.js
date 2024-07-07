/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Aryans-Registry',
    description: 'The Private store for My supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://ArynKumr.github.io/Kasm-WS/',
    contactUrl: 'https:/x.com/ArynKumr',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
