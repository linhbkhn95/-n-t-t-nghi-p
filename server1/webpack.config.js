var path = require('path');
var webpack = require('webpack');
module.exports={

  entry:[
      //   'script!jquery/dist/jquery.min.js',
      // 'script!foundation-sites/dist/js/foundation.min.js',
      'app/index.js'
  ],
  output:{
     path:__dirname,
     filename:'./assets/js/bundel.js'
  },
  // externals: {
  //   jquery: 'jQuery'
  // },
  // plugins: [
  //   new webpack.ProvidePlugin({
  //     '$': 'jquery',
  //     'jQuery': 'jquery'
  //   })
  // ],
  plugins: [
    new webpack.DefinePlugin({
        '__SERVER__': 'false',
        '__BROWSER__': 'true', // you really only need one of these, but I like to have both
    }),
  ],
  resolve:{
    modules: [__dirname, 'node_modules'],
    extensions: ['*', '.jsx', '.js', '.json'],
    alias:{
      



    }
  },
  module:{
    loaders:[
      {
        loader:'babel-loader', //thu vien nhu 1 chuong trinh dich
        query:{
          presets:['react','es2015','stage-0'] // cac thu vien can de webpack no hieu dc doan ma jsx html
        },
        test:/\.(js|jsx)$/,    //file nao xu dung trong goi bundel
        exclude:/node_modules/ //ngoai tru khog su dung
      }
    ]
  },
  node:{
    net:'empty',
    dns:'empty'
  }
}
