const siteUrl = "https://abi-ai.com"

module.exports = {
  siteMetadata: {
    title: `ABI AI`,
    description: `ABI AI builds custom AI products and runs human-data programmes for organisations deploying AI in the real world. ABI AI L.L.C-FZ, registered in Meydan Free Zone, Dubai.`,
    siteUrl,
    author: `ABI AI`,
  },

  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ABI AI`,
        short_name: `ABI AI`,
        start_url: `/`,
        background_color: `#FBFBF9`,
        theme_color: `#FBFBF9`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },

    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        // The form confirmation page carries no standalone value and should
        // not appear in search results.
        excludes: [`/contact/success/`],
      },
    },

    /**
     * The previous version of this site shipped gatsby-plugin-offline, which
     * registered a service worker in returning visitors' browsers. Simply
     * removing that plugin would leave those visitors pinned to the old cached
     * site indefinitely. This plugin actively unregisters it instead.
     */
    `gatsby-plugin-remove-serviceworker`,

    `gatsby-plugin-netlify`,
  ],
}
