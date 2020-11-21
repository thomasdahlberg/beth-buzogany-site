import React, { Component } from "react";
import workStyles from "./work.module.scss";
import "../styles/index.scss";
let workContent = require("./workContent");
const images = require.context("../../public/images", true);

class HomeContent extends Component {
    constructor(props) {
      super(props) 
      let random = this.rand()
      this.state = {
        workLib: workContent.homeLib,
        landingWork: workContent.homeLib[random],
      };
    }
    
    desktopImage = React.createRef();

    rand(maxLimit = workContent.paperLib.length) {
        let rand = Math.random() * maxLimit;
        return Math.floor(rand);
    }

    boundingBox = {
            style: {
                backgroundImage: "url(" + images(`./${this.props.landingWork.type}/${this.props.landingWork.file}.jpg`) + ")",
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "100%",
                width: "100%",
                },
            data: this.props.landingWork
    }

    render(){
    return (
        <div className={workStyles.container}>
            <div className={workStyles.content}>
                {/* <div className="desktop-layout"> */}
                    <div ref={this.desktopImage} style={this.boundingBox.style} className="desktop-layout"></div>
                {/* </div> */}
                <img className="mobile-layout" src={images(`./${this.props.landingWork.type}/${this.props.landingWork.file}.jpg`)} />
                <p><em>{this.state.landingWork.title}</em>; {this.state.landingWork.year}; {this.state.landingWork.materials}, {this.state.landingWork.dimensions}</p>      
            </div>
        </div>
        )
    }
}

export default HomeContent
