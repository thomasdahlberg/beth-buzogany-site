import React, { Component } from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import Display from "../components/display"
let workContent = require('../components/workContent') 

class Painting extends Component {
    constructor(props) {
        super(props) 
        let random = this.rand();
        this.state = {
            workLib: workContent.paintLib,
            landingWork: workContent.paintLib[random]
        };
    }

    rand(maxLimit = workContent.paintLib.length) {
        let rand = Math.random() * maxLimit;
        return Math.floor(rand);
       }

    render() {
        return (
            <Layout>
                <Head title="Painting" />
                <Display 
                    library={this.state.workLib}
                    landingWork={this.state.landingWork}    
                />
            </Layout>
        )
    }
}

export default Painting
