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

    render(){
    return (
        <div className={workStyles.containerSmall}>
            <div className={workStyles.contentSmall}>
                <img src={images(`./${this.props.landingWork.type}/${this.props.landingWork.file}.jpg`)} alt={this.props.landingWork.title}/>
                <p><em>{this.props.landingWork.title}</em>; {this.props.landingWork.year}; {this.props.landingWork.materials}, {this.props.landingWork.dimensions}</p>      
            </div>
        </div>
        )
    }
}

export default HomeContent
