const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    context:  path.resolve(__dirname, 'src'),
    entry: './index.js',
    module: {
        rules: [
            {
                test: /\.css/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpeg|jpg|svg)$/,
                use: 'file-loader'
            },
            { test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env']
              }
            }
            }
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './app.js'
    },
    mode: 'development',
    plugins:[
    new HtmlWebpackPlugin({
        path: path.resolve(__dirname, "src"),
        template: './index.html'
    }),
    new CleanWebpackPlugin()
]
}