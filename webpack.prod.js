const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack')

/**
 * Webpack config file. Bare bones~ish.
 */

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    // The actual build below
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'static'),
        publicPath: '/'
    },
    // Dev server configs for `webpack-dev-server` module.
    devServer: {
        contentBase: path.join(__dirname, "static"),
        compress: true,
        port: 9000,
        historyApiFallback: true
    },
    plugins: [
        new Dotenv({
            path: './.env'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ['env', 'react'],
                    plugins: ["transform-class-properties"]
                }
            },
            //   {test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader"},

            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            }
        ]
    },
    resolve: {
        // You can add a resolve for '.scss' here so you don't have to
        // specify file extensions in your components.
        extensions: ['.jsx', '.js', 'scss'],
        modules: ['node_modules'],
        alias: {
            Components: path.resolve(paths.appSrc, 'components'),
            '@A': path.resolve(paths.appComponents, '_atoms'), // atom
            '@M': path.resolve(paths.appComponents, '_molecules'), // molelcule
            '@O': path.resolve(paths.appComponents, '_organisms'), // organism
        },
    }
};