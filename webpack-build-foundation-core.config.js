const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const foundationCssPath = 'assets/styles/scss';
const outputPath = 'dist';

let conf = {
    entry: {
        'foundation': [path.resolve(__dirname, foundationCssPath + '/style.scss')]
    },
    output: {
        path: path.resolve(__dirname, outputPath),
        filename: '[name]-bundle.js', // [name] is a feature of webpack to insert entry point name
    },
    plugins: [
        new MiniCssExtractPlugin({ // takes css code from compiled bundle.js code and copies it to separate css file
            filename: '[name]-styles.css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.s?[c]ss$/i, // regexp for css and scss files
                use: [
                    // css loaders will be launched in reverse order, so first will be sass-loader, after it - css-loader and after that - loader of MiniCssExtractPlugin
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            url: false // url=false - to tell webpack to not handle URLs and files under URLs in css files (so we can build paths as usually in css - with referring to /dist/site-styles.css as the place where compiled css files are being stored)
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ]
            },
        ],
    },
    devtool: false, // do not source-map for foundation css file
}

module.exports = function (env, options) {
    return conf;
};