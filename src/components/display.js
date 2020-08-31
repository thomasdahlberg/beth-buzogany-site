import React, { Component } from "react";
import workStyles from "../components/work.module.scss"
const images = require.context("../../public/images", true);

class Display extends Component {
    constructor(props) {
        super(props)
        this.state = {
            responsive: true
        } 
    }
    
    imageRef = React.createRef();
    captionRef = React.createRef();
    leftButRef = React.createRef();
    rightButRef = React.createRef();

    handleImageSelect = (e) => {
        const libSize = this.props.library.length;
        const selectedWork = this.props.library[e.target.id];
        const imageNode = this.imageRef.current;
        const captionNode = this.captionRef.current;
        const leftButNode = this.leftButRef.current;
        const rightButNode = this.rightButRef.current;
        imageNode.src = images(`./${selectedWork.type}/${selectedWork.file}.jpg`);
        imageNode.alt = `${selectedWork.title}`;
        captionNode.innerHTML = `<em>${selectedWork.title}</em>; ${selectedWork.year}; ${selectedWork.materials}; ${selectedWork.dimensions}`;
        leftButNode.id = `${selectedWork.id - 1 >= 0 ? selectedWork.id - 1 : libSize-1}`;
        rightButNode.id = `${selectedWork.id + 1 < libSize ? selectedWork.id + 1 : 0}`;
    }

    // handleImageToggle = (e) => {
    //     const selectedWork = this.props.library[Number(e.target.id)]);
    //     console.dir(e.target.id);
    // }


    render(){
        return(
            <div className={workStyles.containerSmall}>
                <div className={workStyles.contentSmall}>
                    <div className={workStyles.buttonContainer}>
                        <button ref={this.leftButRef} className={workStyles.navButton} onClick={this.handleImageSelect} id={this.props.landingWork.id - 1}>&lsaquo;</button>
                        <img ref={this.imageRef} src={images(`./${this.props.landingWork.type}/${this.props.landingWork.file}.jpg`)} alt={this.props.landingWork.title} id={this.props.landingWork.id}/>
                        <button ref={this.rightButRef} className={workStyles.navButton} id={this.props.landingWork.id + 1} onClick={this.handleImageSelect}>&rsaquo;</button>
                    </div>
                    <p ref={this.captionRef}><em>{this.props.landingWork.title}</em>; {this.props.landingWork.year}; {this.props.landingWork.materials}; {this.props.landingWork.dimensions}</p>
                </div>
                <div className={workStyles.gallerySmall}>
                    {this.props.library.map(({ type, title, file, id}, idx)=>
                        <button className={workStyles.button} key={idx} id={id} onClick={this.handleImageSelect}><img key={idx} id={idx}  src={images(`./${type}/${file}.jpg`)} alt={title}/></button>
                    )}
                </div>
            </div>
        )
    }
}

export default Display;