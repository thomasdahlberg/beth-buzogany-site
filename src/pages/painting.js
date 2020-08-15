import React, { Component } from "react"
import workStyles from "../components/work.module.scss"
import Layout from "../components/layout"
import Head from "../components/head"
let workContent = require('../components/workContent') 

class Painting extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            paintings: workContent.workLib
        };
    }
    imageRef = React.createRef();
    captionRef = React.createRef();

    handleImageSelect = (e) => {
        console.log(e.target.id);
        const selectedWork = this.state.paintings[e.target.id];
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
                        <img ref={this.imageRef} src="./images/painting/slopsink.jpg" alt={workContent.workLib[0].title}/>
                        <p ref={this.captionRef}><em>Sôma</em>; 2020; acrylic, dirt, pencil and foam board, 6in x 9in x 9in</p>      
                    </div>
                    <div className={workStyles.gallery}>
                            {workContent.workLib.map(({ type, title, file }, idx)=>
                                <img key={idx} id={idx} onClick={this.handleImageSelect} src={`./images/${type}/${file}.jpg`} alt={title}/>
                            )}
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Painting
