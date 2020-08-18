import React, { Component } from "react"
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

    handleImageSelect = (e) => {
        console.log(e.target.id);
        const selectedWork = this.props.library[e.target.id];
        const imageNode = this.imageRef.current;
        const captionNode = this.captionRef.current;
        imageNode.src = images(`./${selectedWork.type}/${selectedWork.file}.jpg`);
        imageNode.alt = `${selectedWork.title}`;
        captionNode.innerHTML = `<em>${selectedWork.title}</em>; ${selectedWork.year}; ${selectedWork.materials}; ${selectedWork.dimensions}`;
    }


    render(){
        return(
            <div>
                <div className={workStyles.container}>
                    <div className={workStyles.content}>
                        <img ref={this.imageRef} src={images(`./${this.props.landingWork.type}/${this.props.landingWork.file}.jpg`)} alt={this.props.landingWork.title}/>
                        <p ref={this.captionRef}><em>{this.props.landingWork.title}</em>; {this.props.landingWork.year}; {this.props.landingWork.materials}; {this.props.landingWork.dimensions}</p>
                    </div>
                    <div className={workStyles.gallery}>
                        {this.props.library.map(({ type, title, file }, idx)=>
                            <button className={workStyles.button} key={idx} id={idx} onClick={this.handleImageSelect}><img key={idx} id={idx}  src={images(`./${type}/${file}.jpg`)} alt={title}/></button>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Display;