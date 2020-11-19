import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import favicon from '../../static/favicon.ico';


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
            <Helmet title={`${title} | ${data.site.siteMetadata.title}`}>
                <link rel="icon" href={favicon}/>
            </Helmet>
        </div>
    )
}

export default Head