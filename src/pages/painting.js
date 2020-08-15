import React, { Component } from "react"
import workStyles from "../components/work.module.scss"
import Layout from "../components/layout"
import Head from "../components/head"
let workContent = require('../components/workContent') 

class Painting extends Component {
    constructor(props) {
        super(props) 
        this.state = {};
    }

    render() {
        return (
            <Layout>
                <Head title="Home" />
                <div className={workStyles.container}>
                    <div className={workStyles.content}>
                        <img src="./images/painting/slopsink.jpg" alt="soma sculpture"/>
                        <p><em>Sôma</em>; 2020; acrylic, dirt, pencil and foam board, 6in x 9in x 9in</p>      
                    </div>
                    <div className={workStyles.gallery}>
                            {workContent.workLib.map(({ type, title, file })=>
                                <img src={`./images/${type}/${file}.jpg`} alt={title}/>
                            )}
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Painting
