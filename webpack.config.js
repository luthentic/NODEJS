module.exports={
  //define entry point
  entry:'./src/pack1.js',

  //define output point
  output:{
    path: __dirname+'/dist',
    filename:'bundle.js'
  },

  module:{
    loaders:{
      test: /\.js$/,
      exculde:/(node_modules)/
    }
  }
}