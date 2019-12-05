const path = require('path')


module.exports = {
    entry: {
      main: "./src/assets/scripts/App.js",
      vendor: "./src/assets/scripts/Vendor.js"
    },
    module: {
        rules: [
          {
            test: /\.(html)$/,
            use: ['html-loader']
          },
          {
            test: /\.(svg|png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name:'[name].[hash].[ext]',
                  outputPath: 'imgs',
                  esModule: false
              }
              }]
          }
        ],
      },
}

