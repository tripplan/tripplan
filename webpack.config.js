const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")
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
        })
    ]
}
