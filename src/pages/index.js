import React from "react";
import { StaticQuery, graphql } from 'gatsby';
import Layout from "../components/layout";
import Display from "../components/display";

const HomePage = () => {
  return(
    <Layout title="Home">
      <StaticQuery
        query={graphql`
          query {
              allArtwork(filter: {file: {eq: "yogb"}}) {
                  edges {
                      node {
                          title
                          file
                          materials
                          dimensions
                          type
                      }
                  }
              }
          }
        `}
        render={ data => 
          <Display
            homepage={true}
            library={data.allArtwork.edges}
          />
        }
      />
    </Layout>
  )
}

export default HomePage