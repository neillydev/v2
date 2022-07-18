const path = require('path');

module.exports = {
  output: { path: path.resolve(__dirname, 'static'), },
  reactStrictMode: true,
  images: {
    domains: ["neilly.dev"],
    loader: "custom",
    path: "/",
  },
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.pdf/,
        type: 'asset/resource',
        generator: {
          filename: 'static/[hash][ext]',
        },
      },
      {
        test: /\.svg$/,
        use: '@svgr/webpack',
      }
    )
    return config;
  }
};