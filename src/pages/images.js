import React from "react";
import { StaticQuery, graphql } from 'gatsby';
import Layout from "../components/layout";
import Display from "../components/display";

const Digital = () => {
    return (
        <Layout title="Digital">
            <StaticQuery
                query={graphql`
                    query {
                        allArtwork(filter: {type: {eq: "digital"}}) {
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
                render={ data => <Display library={data.allArtwork.edges} /> }
            />
        </Layout>
    )
}

export default Digital
