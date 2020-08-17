import React, { Component } from "react"
import workStyles from "../components/work.module.scss"
import Layout from "../components/layout"
import Head from "../components/head"
let workContent = require('../components/workContent') 

class Painting extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            painting: workContent.paintLib,
            landingWork: workContent.paintLib[this.rand()]
        };
    }
    imageRef = React.createRef();
    captionRef = React.createRef();

    rand(maxLimit = workContent.paintLib.length) {
        let rand = Math.random() * maxLimit;
        return Math.floor(rand);
       }

    handleImageSelect = (e) => {
        console.log(e.target.id);
        const selectedWork = this.state.painting[e.target.id];
        const imageNode = this.imageRef.current;
        const captionNode = this.captionRef.current;
        imageNode.src = `./images/${selectedWork.type}/${selectedWork.file}.jpg`;
        imageNode.alt = `${selectedWork.title}`;
        captionNode.innerHTML = `<em>${selectedWork.title}</em>; ${selectedWork.year}; ${selectedWork.materials}; ${selectedWork.dimensions}`;
    }

    render() {
        return (
            <Layout>
                <Head title="Painting" />
                <div className={workStyles.container}>
                    <div className={workStyles.content}>
                        <img ref={this.imageRef} src={`./images/painting/${this.state.landingWork.file}.jpg`} alt={this.state.landingWork.title}/>
                        <p ref={this.captionRef}><em>{this.state.landingWork.title}</em>; {this.state.landingWork.year}; {this.state.landingWork.materials}; {this.state.landingWork.dimensions}</p>      
                    </div>
                    <div className={workStyles.gallery}>
                            {workContent.paintLib.map(({ type, title, file }, idx)=>
                                <button className={workStyles.button} key={idx} id={idx} onClick={this.handleImageSelect}><img key={idx} id={idx}  src={`./images/${type}/${file}.jpg`} alt={title}/></button>
                            )}
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Painting
