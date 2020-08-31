import React, { Component } from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import Display from "../components/display"
let workContent = require('../components/workContent') 

class Sculpture extends Component {
    constructor(props) {
        super(props) 
        let random = this.rand();
        this.state = {
            workLib: workContent.sculpLib,
            landingWork: workContent.sculpLib[random]
        };
    }

    rand(maxLimit = workContent.sculpLib.length) {
        let rand = Math.random() * maxLimit;
        return Math.floor(rand);
       }

    render() {
        return (
            <Layout>
                <Head title="Sculpture" />
                <Display 
                    library={this.state.workLib}
                    landingWork={this.state.landingWork}    
                />
            </Layout>
        )
    }
}

export default Sculpture
