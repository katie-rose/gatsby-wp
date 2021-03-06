const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-layouts-blogpostlayout-js": hot(preferDefault(require("/Users/katierose/Desktop/git/gatsby-wp/src/layouts/blogpostlayout.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/katierose/Desktop/git/gatsby-wp/.cache/dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/katierose/Desktop/git/gatsby-wp/src/pages/about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/katierose/Desktop/git/gatsby-wp/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/katierose/Desktop/git/gatsby-wp/src/pages/index.js")))
}

