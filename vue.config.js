const path = require('path');
const webpack = require('webpack')

// let BackEnd_URL_Live = "http://172.16.3.17:3000"
// let BackEnd_DEV = "http://localhost:3000";
// let isDEV = false;

module.exports = {
  // APP_NAME : "firstApp",
  // BACKEND_URL : isDEV ? BackEnd_DEV : BackEnd_URL_Live,

  configureWebpack: {
    resolve: {
      alias: {
        "src": path.resolve(__dirname, 'src/'),
        "assets": path.resolve(__dirname, 'src/assets'),
        "components": path.resolve(__dirname, 'src/components'),
        "router": path.resolve(__dirname, 'src/router'),
        "modules": path.resolve(__dirname, 'src/modules'),
        "services": path.resolve(__dirname, 'src/services')
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        mapboxgl: 'mapbox-gl',
      }),
    ],
  },
  "transpileDependencies": [
    "vuetify"
  ]
}
