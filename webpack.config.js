const path = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = (env) => {
    const isProduction = env === 'production'
    return {
        mode: 'development',
        entry: './src/index.js',
        output: {
            filename: 'main.[contentHash].js',
            path: isProduction
                ? path.resolve(__dirname, 'dist')
                : path.resolve(__dirname, 'dist'),
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: isProduction ? '[name].[hash].css' : '[name].css',
                chunkFilename: isProduction ? '[id].[hash].css' : '[id].css',
            }),
            new HtmlWebpackPlugin({
                template: './src/index.html',
            }),
            new CleanWebpackPlugin(),
        ],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: ['babel-loader'],
                    exclude: /node_modules/,
                },
                {
                    test: /\.s?css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                    ],
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash].[ext]',
                            outputPath: 'images',
                        },
                    },
                },
                {
                    test: /\.html$/,
                    use: ['html-loader'],
                },
                {
                    test: /\.font\.js/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'webfonts-loader',
                    ],
                },
            ],
        },
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            historyApiFallback: true,
        },
    }
}
