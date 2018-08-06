const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const webpack = require("webpack")
const path = require("path")

module.exports = {
    devServer: {
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS
                ]
            }
        ]
    },
    output: {
        publicPath: "/"
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"],
        modules: [path.resolve("./src"), path.resolve("./node_modules")]
    },
    plugins: [
        new CleanWebpackPlugin(["dist"]),
        new HtmlWebpackPlugin({
            template: "src/index.html"
        }),
        new webpack.ProvidePlugin({
            React: "react",
            Link: ["react-router-dom", "Link"]
        })
    ]
}
