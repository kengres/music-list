- add react hot module
- code splitting
- css extraction
- html plugin
- named modules
- define plugin
- dev server
  devServer: {
        // contentBase: path.join(__dirname, "dist"),
        contentBase: resolve(__dirname, 'dist'),
        compress: false,
        port: 4000,
        stats: 'errors-only',
        hot: true,
        publicPath: '/',
        // open: true
    },
- fonts limit