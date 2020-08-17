import React, { Component } from "react"
import workStyles from "../components/work.module.scss"
import Layout from "../components/layout"
import Head from "../components/head"
let workContent = require('../components/workContent') 

class Collage extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            collage: workContent.collLib,
            landingWork: workContent.collLib[this.rand()]
        };
    }
    imageRef = React.createRef();
    captionRef = React.createRef();

    rand(maxLimit = workContent.collLib.length) {
        let rand = Math.random() * maxLimit;
        return Math.floor(rand);
       }

    handleImageSelect = (e) => {
        console.log(e.target.id);
        const selectedWork = this.state.collage[e.target.id];
        const imageNode = this.imageRef.current;
        const captionNode = this.captionRef.current;
        imageNode.src = `./images/${selectedWork.type}/${selectedWork.file}.jpg`;
        imageNode.alt = `${selectedWork.title}`;
        captionNode.innerHTML = `<em>${selectedWork.title}</em>; ${selectedWork.year}; ${selectedWork.materials}; ${selectedWork.dimensions}`;
    }

    render() {
        return (
            <Layout>
                <Head title="Home" />
                <div className={workStyles.container}>
                    <div className={workStyles.content}>
                        <img ref={this.imageRef} src={`./images/${this.state.landingWork.type}/${this.state.landingWork.file}.jpg`} alt={this.state.landingWork.title}/>
                        <p ref={this.captionRef}><em>{this.state.landingWork.title}</em>; {this.state.landingWork.year}; {this.state.landingWork.materials}; {this.state.landingWork.dimensions}</p>      
                    </div>
                    <div className={workStyles.gallery}>
                            {workContent.collLib.map(({ type, title, file }, idx)=>
                                <a key={idx} id={idx}><img key={idx} id={idx} onClick={this.handleImageSelect} src={`./images/${type}/${file}.jpg`} alt={title}/></a>
                            )}
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Collage
