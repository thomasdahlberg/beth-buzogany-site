import React, { Component } from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import Display from "../components/display"
let workContent = require('../components/workContent') 

class Collage extends Component {
    constructor(props) {
        super(props) 
        let random = this.rand();
        this.state = {
            workLib: workContent.collLib,
            landingWork: workContent.collLib[random]
        };
    }

    rand(maxLimit = workContent.collLib.length) {
        let rand = Math.random() * maxLimit;
        return Math.floor(rand);
       }
    
       refreshState = () => this.setState({landingWork: workContent.collLib[this.rand()]})

    componentDidMount(){
        this.refreshState();
    }
   

    render() {
        return (
            <Layout>
                <Head title="Collage" />
                <Display 
                    library={this.state.workLib}
                    landingWork={this.state.landingWork}    
                />
            </Layout>
        )
    }
}

export default Collage
