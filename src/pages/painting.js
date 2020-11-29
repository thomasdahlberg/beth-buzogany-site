import React from "react";
import { StaticQuery, graphql } from 'gatsby';
import Layout from "../components/layout";
import Display from "../components/display";

const Painting = () => {        
    return (
        <Layout title="Painting">
            <StaticQuery
                query={graphql`
                    query {
                        allArtwork(filter: {type: {eq: "painting"}}) {
                            edges {
                                node {
                                    title
                                    file
                                    year
                                    materials
                                    dimensions
                                    type
                                }
                            }
                        }
                    }
                `}
                render={ data => <Display library={data.allArtwork.edges} /> }
            />
        </Layout>
    )
}

export default Painting
