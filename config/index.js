module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteTitle: 'PapaBear Codes', // Navigation and Site Title
  siteTitleAlt: 'PapaBear Codes - Web Development Articles', // Alternative Site title for SEO
  siteTitleManifest: 'MinimalBlog',
  siteUrl: 'https://papabearcodes.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteHeadline: 'Writing and publishing content', // Headline for schema.org JSONLD
  siteBanner: '/social/banner.jpg', // Your image for og:image tag. You can find it in the /static folder
  favicon: 'src/bear.svg', // Your image for favicons. You can find it in the /src folder
  siteDescription: 'Minimal Blog focused on Web Development', // Your site description
  author: 'David Quick', // Author for schemaORGJSONLD
  siteLogo: 'src/bear.svg', // Image for schemaORGJSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@papabearcodes', // Twitter Username - Optional
  ogSiteName: 'minimal', // Facebook Site Name - Optional
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  // See: https://developers.google.com/web/fundamentals/web-app-manifest/
  themeColor: '#3498DB',
  backgroundColor: '#2b2e3c',
}
