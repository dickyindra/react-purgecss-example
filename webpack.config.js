const path = require("path")
const glob = require("glob")
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const PurgecssPlugin = require("purgecss-webpack-plugin")

const PATHS = {
    src: path.join(__dirname, "src"),
}

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebPackPlugin({
            template: "./src/html/index.html",
            filename: "./index.html",
        }),
        new PurgecssPlugin({
            paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
        }),
    ],
    devServer: {
        historyApiFallback: true,
        disableHostCheck: true,
    },
}
