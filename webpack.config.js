let webpack = require('webpack')
module.exports = {
    entry:{
        index :['./src/index.js','./src/product/product.js'],
        product :['./src/product/index.js','./src/product/product.js']
    },

    output:
        {
            path: __dirname+'/dist',
            filename:'[name][hash].js'
        }
    
    /* module:{
        loaders:[

        ] 
    }*/
}