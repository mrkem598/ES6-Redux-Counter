module.exports = {

  // This code will be compiled
  entry: "./app/App.js",

  // Then output into this file
  output: {
    filename: "public/bundle.js"
  },


  // This will be what we do
  module: {
    loaders: [
      {
        test: /\.js?$/,
        include: /app/,
        loader: 'babel',
        query: {
          // These are the specific transformations we'll be using.
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['transform-decorators-legacy'],
        }
      }
    ]
  },
  // This lets us debug our react code in chrome dev tools. Errors will have lines and file names
  // Without this the console says all errors are coming from just coming from bundle.js
devtool: "eval-source-map"
};
