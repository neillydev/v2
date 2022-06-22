module.exports = {
    reactStrictMode: true,
    images: {
      domains: ["neilly.dev"],
      loader: "custom",
      path: "/",
    },
    webpack(config) {
      config.module.rules.push(
        {
          test: /\.svg$/,
          use: '@svgr/webpack',
        }
      )
      return config;
    }
  };