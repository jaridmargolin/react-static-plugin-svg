/* -----------------------------------------------------------------------------
 * svg
 * -------------------------------------------------------------------------- */

export default () => ({
  webpack: config => {
    const moduleRules = config.module.rules[0].oneOf

    moduleRules.unshift({
      test: /\.svg$/,
      use: [
        {
          loader: require.resolve('svg-react-loader'),
          query: { classIdPrefix: '[name]-[hash:8]__' }
        },
        {
          loader: require.resolve('svgo-loader'),
          options: {
            plugins: [
              { convertPathData: true },
              { collapseGroups: true },
              { inlineStyles: true },
              { prefixIds: true },
              { removeComments: true },
              { removeDesc: true },
              { removeEditorsNSData: true },
              { removeTitle: true },
              { removeUnusedNS: true },
              { removeViewBox: false },
              { removeXMLNS: true }
            ]
          }
        }
      ]
    })

    return config
  }
})
