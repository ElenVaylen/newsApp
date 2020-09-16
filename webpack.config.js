"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var webpack_1 = __importDefault(require("webpack"));
var html_webpack_plugin_1 = __importDefault(require("html-webpack-plugin"));
var fork_ts_checker_webpack_plugin_1 = __importDefault(require("fork-ts-checker-webpack-plugin"));
var webpackConfig = function (env) { return ({
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            components: path_1.default.resolve(__dirname, 'src/components/'),
            store: path_1.default.resolve(__dirname, 'src/store/'),
            pages: path_1.default.resolve(__dirname, 'src/pages/'),
        }
    },
    output: {
        path: path_1.default.join(__dirname, '/dist'),
        filename: 'build.js',
        chunkFilename: '[name].bundle.js',
        publicPath: env.production ? './' : '/'
    },
    devServer: {
        contentBase: path_1.default.join(__dirname, '/dist'),
        historyApiFallback: true,
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    performance: { hints: false },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true
                },
                exclude: /dist/
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|gif)$/i,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }
        ]
    },
    plugins: [
        new html_webpack_plugin_1.default({
            template: './public/index.html'
        }),
        new webpack_1.default.DefinePlugin({
            'process.env.PRODUCTION': env.production || !env.development,
            'process.env.NAME': JSON.stringify(require('./package.json').name),
            'process.env.VERSION': JSON.stringify(require('./package.json').version)
        }),
        new fork_ts_checker_webpack_plugin_1.default({
            eslint: {
                files: './src/**/*.{ts,tsx,js,jsx}'
            }
        })
    ]
}); };
exports.default = webpackConfig;
//# sourceMappingURL=webpack.config.js.map