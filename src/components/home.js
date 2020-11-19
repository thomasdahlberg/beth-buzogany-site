import React, { Component } from "react";
import workStyles from "./work.module.scss";
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
                <div className={workStyles.boundingBox} style={this.boundingBox.style}></div>
                <p><em>{this.boundingBox.data.title}</em>; {this.boundingBox.data.year}; {this.boundingBox.data.materials}, {this.boundingBox.data.dimensions}</p>      
            </div>
        </div>
        )
    }
}

export default HomeContent
