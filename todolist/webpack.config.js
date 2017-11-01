module.exports = {
    entry:'./app/main.js',
    output: {
        patch: './app',
        filename:'bundle.js'
    },
    devServer: {
        inline: true,
        contentBase: './app',
        port:3000
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude:/node_modules/,
                loader:'babel'
            }
        ]
    }
}