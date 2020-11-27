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
                <link 
                    rel="icon" 
                    href={favicon}
                />
                <link 
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                />
            </Helmet>
        </div>
    )
}

export default Head