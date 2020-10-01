module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-theme-ui/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-catch-links/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"extensions":[".mdx",".md"],"defaultLayouts":{"default":"/Users/rejon/community/src/modules/layouts/mdx_layout.js"},"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-embed-video","options":{"width":800,"ratio":1.77,"height":400,"related":false,"noIframeBorder":true,"showInfo":false}},"gatsby-remark-responsive-iframe",{"resolve":"gatsby-remark-images","options":{"maxWidth":1000,"linkImagesToOriginal":false}},{"resolve":"gatsby-remark-code-titles","options":{"className":"prism-code-title"}}]},
    },{
      plugin: require('../node_modules/gatsby-plugin-lunr/gatsby-browser.js'),
      options: {"plugins":[],"languages":[{"name":"en"}],"fields":[{"name":"title","store":true,"attributes":{"boost":20}},{"name":"keywords","attributes":{"boost":15}},{"name":"url","store":true},{"name":"excerpt","store":true,"attributes":{"boost":5}}],"resolvers":{"Mdx":{}},"filename":"search_index.json","fetchOptions":{"credentials":"same-origin"}},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"head":false,"anonymize":true,"respectDNT":true,"exclude":["/"],"pageTransitionDelay":0,"defer":true},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"MakerDAO Community Portal","short_name":"MKD Comm Portal","start_url":"/","background_color":"#291a42","theme_color":"#5AE2CA","display":"standalone","include_favicon":false,"icon":"src/modules/utility/icon-512x512.png","cache_busting_mode":"none","theme_color_in_head":false,"legacy":true,"cacheDigest":null},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[],"workboxConfig":{"globPatterns":["**/images/icons/icon-512x512.png"]}},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
