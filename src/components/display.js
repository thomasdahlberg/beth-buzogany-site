import React, { Component } from "react";
import workStyles from "../components/work.module.scss"
const images = require.context("../../public/images", true);

class Display extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bigImage: false,
        } 
    }
    
    imageRef = React.createRef();
    bigImageRef = React.createRef();
    zoomRef = React.createRef();
    captionRef = React.createRef();
    leftButRef = React.createRef();
    rightButRef = React.createRef();

    handleImageSelect = (e) => {
        console.log(e.target.attributes[1].nodeValue);
        let selectedWork;
        e.target.localName === "img" ? selectedWork = this.props.library[e.target.id] : selectedWork = this.props.library[e.target.attributes[1].nodeValue];
        const libSize = this.props.library.length;
        const imageNode = this.imageRef.current;
        const captionNode = this.captionRef.current;
        const leftButNode = this.leftButRef.current;
        const rightButNode = this.rightButRef.current;
        const bigimageNode = this.bigImageRef.current;
        imageNode.src = images(`./${selectedWork.type}/${selectedWork.file}.jpg`);
        imageNode.alt = `${selectedWork.title}`;
        bigimageNode.src = images(`./${selectedWork.type}/${selectedWork.file}.jpg`);
        bigimageNode.alt = `${selectedWork.title}`;
        captionNode.innerHTML = `<em>${selectedWork.title}</em>; ${selectedWork.year}; ${selectedWork.materials}; ${selectedWork.dimensions}`;
        leftButNode.attributes[1].nodeValue = `${selectedWork.id - 1 >= 0 ? selectedWork.id - 1 : libSize-1}`;
        rightButNode.attributes[1].nodeValue = `${selectedWork.id + 1 < libSize ? selectedWork.id + 1 : 0}`;
    }

    handleBigImageStyle = () => {
        const zoomNode = this.zoomRef.current;
        if(this.state.bigImage === false) {
          zoomNode.style.opacity = 0;
          zoomNode.style.zIndex = -1;
        } else {
          zoomNode.style.opacity = 1;
          zoomNode.style.zIndex = 10;
        }
      }

    handleToggleBigImage = () => {
        if(this.state.bigImage === false){
            this.setState({bigImage: true});
        } else {
            this.setState({bigImage: false});
        }
        this.handleBigImageStyle();
    }

    handleKeyDown = (e) => {
        e.preventDefault();
        console.log(e);
        console.log('firing');
        if(e.keyCode === 37){
            const left = document.getElementById('l');
            left.click();
        }
        if(e.keyCode === 39){
            const right = document.getElementById('r');
            right.click();
        }
        if(e.keyCode === 27 || e.keyCode === 13){
            this.handleToggleBigImage();      
        }
        return false;
    }

    componentDidMount(){
        document.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount(){
        document.removeEventListener("keydown", this.handleKeyDown);
    }

    render(){
        return(
            <div className={workStyles.containerSmall}>
                <div ref={this.zoomRef} className={workStyles.bigImage}>
                    <div className={workStyles.imgbtn}>
                        <button tabIndex="-2" onKeyDown={this.handleKeyDown} onClick={this.handleToggleBigImage}><img ref={this.bigImageRef} src={images(`./${this.props.landingWork.type}/${this.props.landingWork.file}.jpg`)} alt={this.props.landingWork.title} id={this.props.landingWork.id}/></button>
                    </div>
                </div>
                <div className={workStyles.contentSmall}>
                    <div className={workStyles.buttonContainer}>
                        <button ref={this.leftButRef} className={workStyles.navButton} form={this.props.landingWork.id - 1} onClick={this.handleImageSelect} id="l"onKeyDown={this.handleKeyDown}>&lsaquo;</button>
                        <div className={workStyles.imgbtn}>
                            <button tabIndex="-1" onKeyDown={this.handleKeyDown} onClick={this.handleToggleBigImage}><img ref={this.imageRef} src={images(`./${this.props.landingWork.type}/${this.props.landingWork.file}.jpg`)} alt={this.props.landingWork.title} id={this.props.landingWork.id}/></button>
                        </div>
                        <button ref={this.rightButRef} className={workStyles.navButton} form={this.props.landingWork.id + 1} id="r" onClick={this.handleImageSelect}>&rsaquo;</button>
                    </div>
                    <p ref={this.captionRef}><em>{this.props.landingWork.title}</em>; {this.props.landingWork.year}; {this.props.landingWork.materials}; {this.props.landingWork.dimensions}</p>
                </div>
                <div className={workStyles.gallerySmall}>
                    {this.props.library.map(({ type, title, file, id}, idx)=>
                        <button className={workStyles.button} key={idx} form={id} onClick={this.handleImageSelect}><img key={idx} id={id}  src={images(`./${type}/${file}.jpg`)} alt={title}/></button>
                    )}
                </div>
            </div>
        )
    }
}

export default Display;