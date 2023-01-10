import React from "react";
import { StaticQuery, graphql } from 'gatsby';
import Layout from "../components/layout";
import Display from "../components/display";


const Print = () => {
    return (
        <Layout title="Print">
            <StaticQuery
                query={graphql`
                    query {
                        allArtwork(filter: {type: {eq: "print"}}) {
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

export default Print
