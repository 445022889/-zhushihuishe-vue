module.exports = {
    lintOnSave: true,
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-pxtorem')({
                        rootValue: 100,
                        minPixelValue: 2,
                        propList: ['*'],
                    }),
                ]
            }
        }
    }, devServer: {
        port: 8888,
        host:"0.0.0.0"
    },
}