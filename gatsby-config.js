/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Thomas Dahlberg",
    author: "Thomas Dahlberg"
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-sql',
      options: {
        typeName: "Artwork",
        fieldName: "sqlite",
        dbEngine: {
          client: 'sqlite3',
          connection: {
            filename: `${__dirname}/src/data/site.db`
          },
          useNullAsDefault: true
        },
        queryChain: function(query) {
          return query.select("title", "file", "year", "materials", "dimensions", "type").from("artwork")
        }
      }
    },
  ],
}
