const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { defArg } = require('fmihel-server-lib');
const ReplaceBefore = require('webpack-plugin-replace');
const ReplaceAfter = require('replace-in-file-webpack-plugin');

const isDevelopment = defArg('dev');
const includeDebugInfo = defArg('idi');
const isBuildFull = defArg('full'); 

// Папка к клиентской части приложения (исходники js)
const SOURCE_PATH = './app/client/';
// Папка для конечной сборки
const PUBLIC_PATH = isDevelopment ? './public/' : './dist/';
// Папка с шаблонами (index.html)
const TEMPLATE_PATH = `${SOURCE_PATH}template/`;
// Папка с медиа файлами
const MEDIA_PATH = `${SOURCE_PATH}media/`;
// Путь к корневому файлу роутера (если на )
const PHP_ROUTER_ADDR = isDevelopment ? 'http://work/fmihel/config-php-app/app/server/' : './index.php';
// Путь к модулям composer (если меняем from,то изменить и в исходнике  index.php)
const PHP_VENDOR_REPLACE = { from: '/../../vendor/autoload.php', to: '/vendor/autoload.php' };
// установка базового пути для react-router и загрузочной страницы index.html
const BASEPATH_HTML   = isDevelopment?'':'/dist/';

const PORT = 3010;


const CopyWebpackPluginList = [
    { from: `${MEDIA_PATH}favicon.ico` },
];
if (isDevelopment) {
    // CopyWebpackPluginList.push({ from: 'server' });
} else {
    CopyWebpackPluginList.push({ from: 'app/server', ignore: ['router_paths.php','config.php'] });
    if (isBuildFull) {
        CopyWebpackPluginList.push({ from: 'vendor', to: 'vendor' });
    } else {
        // CopyWebpackPluginList.push({ from: 'composer.lock' });
        CopyWebpackPluginList.push({ from: 'composer.json' });
    }
}

const plugins = [
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
    }),
    new HtmlWebPackPlugin({
        template: `${TEMPLATE_PATH}index.html`,
    }),
    new CopyWebpackPlugin(CopyWebpackPluginList),
    new webpack.DefinePlugin({
        PHP_ROUTER_ADDR: JSON.stringify(PHP_ROUTER_ADDR),
        BASEPATH_HTML: JSON.stringify(BASEPATH_HTML),
    }),    
];

let replaceAfterRules = [];

if (!isDevelopment) {
    replaceAfterRules.push(
        {
            dir: PUBLIC_PATH.substring(2),
            files: ['index.php'],
            rules: [{
                search: PHP_VENDOR_REPLACE.from,
                replace: PHP_VENDOR_REPLACE.to,
            }],
        },{
            dir: PUBLIC_PATH.substring(2),
            files: ['.htaccess'],
            rules: [{
                search: 'mod_headers.c',
                replace: 'disabled_mod_headers.c',
            },{
                search: 'BASEPATH_HTML',
                replace: BASEPATH_HTML,
            }],
        },{
            dir: PUBLIC_PATH.substring(2),
            files: [ 'index.html'],
            rules: [{
                search: '<base href=""/>',
                replace: '<base href="'+BASEPATH_HTML+'"/>',
            }],
        }        
        
    );
};

plugins.push(new ReplaceAfter(replaceAfterRules));

module.exports = {
    mode: (isDevelopment || includeDebugInfo ? 'development' : 'production'),
    devtool: (isDevelopment || includeDebugInfo ? 'inline-source-map' : ''),
    devServer: {
        contentBase: PUBLIC_PATH,
        port: PORT,
        liveReload: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    entry: `${SOURCE_PATH}index.js`,
    output: {
        path: path.resolve(__dirname, PUBLIC_PATH),
        filename: '[name].[hash].js',
    },
    resolve: {
        alias: {
            COMPONENTS: path.resolve(__dirname, 'app/client/components/'),
            REDUX: path.resolve(__dirname, 'app/client/redux/'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(scss)$/,
                use: [
                    {
                        loader: 'style-loader', // inject CSS to page
                    },{
                        loader: 'css-loader', // translates CSS into CommonJS modules
                    },{
                        loader: 'postcss-loader', // Run post css actions
                        options: {
                            plugins: function () { // post css plugins, can be exported to postcss.config.js
                                return [
                                    require('precss'),
                                    require('autoprefixer')
                                ];
                            }
                        }
                    },{
                        loader: 'sass-loader' // compiles SASS to CSS
                    }
                ]
            },            
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ],
    },
    plugins,

};
