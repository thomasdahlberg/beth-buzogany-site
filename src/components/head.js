import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Head = ({ title }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return (
        <div>
            <Helmet title={`${title} | ${data.site.siteMetadata.title}`} />
            <meta name="viewport" content="user-scalable=no" />
        </div>
    )
}

export default Head