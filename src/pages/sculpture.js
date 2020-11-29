import React from "react";
import { StaticQuery, graphql } from 'gatsby';
import Layout from "../components/layout";
import Display from "../components/display";

const Sculpture = () => {
    return (
        <Layout title="Sculpture">
            <StaticQuery
                query={graphql`
                    query {
                        allArtwork(filter: {type: {eq: "sculpture"}}) {
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

export default Sculpture
