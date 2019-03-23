const path = require('path');

module.exports = {
    mode: 'production',
    entry: ['./Scripts/es6/main.js'],
    output: {
        path: path.resolve(__dirname, './Scripts/build'),
        filename: 'bundle.js'
    },
    // IMPORTANT NOTE: If you are using Webpack 2 or above, replace "loaders" with "rules"
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },
        {
            test: /\.(scss)$/,
            use: [
                {
                    loader: "style-loader"
                },
                {
                    loader: "css-loader"
                },
                {
                    loader: 'postcss-loader', // Run post css actions
                    options: {
                        plugins: function () { // post css plugins, can be exported to postcss.config.js
                            return [
                                require('precss'),
                                require('autoprefixer')
                            ];
                        }
                    }
                },
                {
                    loader: "sass-loader"
                }
            ]
        }]
    }
};