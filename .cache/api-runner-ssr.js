var plugins = [{
      plugin: require('/Users/rejon/community/node_modules/gatsby-plugin-theme-ui/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/rejon/community/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/rejon/community/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[],"query":"\n          {\n            site {\n              siteMetadata {\n                siteUrl\n              }\n            }\n            allSitePage {\n              edges {\n                node {\n                  path\n                }\n              }\n            }\n        }"},
    },{
      plugin: require('/Users/rejon/community/node_modules/gatsby-plugin-mdx/gatsby-ssr'),
      options: {"plugins":[],"extensions":[".mdx",".md"],"defaultLayouts":{"default":"/Users/rejon/community/src/modules/layouts/mdx_layout.js"},"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-embed-video","options":{"width":800,"ratio":1.77,"height":400,"related":false,"noIframeBorder":true,"showInfo":false}},"gatsby-remark-responsive-iframe",{"resolve":"gatsby-remark-images","options":{"maxWidth":1000,"linkImagesToOriginal":false}},{"resolve":"gatsby-remark-code-titles","options":{"className":"prism-code-title"}}]},
    },{
      plugin: require('/Users/rejon/community/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"head":false,"anonymize":true,"respectDNT":true,"exclude":["/"],"pageTransitionDelay":0,"defer":true},
    },{
      plugin: require('/Users/rejon/community/node_modules/gatsby-plugin-preload-link-crossorigin/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/rejon/community/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"MakerDAO Community Portal","short_name":"MKD Comm Portal","start_url":"/","background_color":"#291a42","theme_color":"#5AE2CA","display":"standalone","include_favicon":false,"icon":"src/modules/utility/icon-512x512.png","cache_busting_mode":"none","theme_color_in_head":false,"legacy":true,"cacheDigest":null},
    },{
      plugin: require('/Users/rejon/community/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[],"workboxConfig":{"globPatterns":["**/images/icons/icon-512x512.png"]}},
    },{
      plugin: require('/Users/rejon/community/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
