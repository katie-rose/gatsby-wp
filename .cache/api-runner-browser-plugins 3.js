module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"GatsbyJS Bootstrap","short_name":"GatsbyJS Bootstrap","start_url":"/","background_color":"#F8F9FA","theme_color":"#FFFFFF","display":"standalone"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
