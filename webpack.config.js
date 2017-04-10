module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname,
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react', 'es2015'],
            plugins: ['transform-class-properties']
          },
        },
      },
    ],
  },
}
