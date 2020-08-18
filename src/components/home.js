import React, { Component } from "react";
import workStyles from "./work.module.scss";
let workContent = require("./workContent");
const images = require.context("../../public/images", true);

class HomeContent extends Component {
    constructor(props) {
      super(props) 
      let random = this.rand()
      this.state = {
        homeImages: workContent.homeLib,
        landingWork: workContent.homeLib[random],
      };
    }

    refreshState = () => this.setState({landingWork: workContent.homeLib[this.rand()]})

    componentDidMount(){
        this.refreshState();
    }


    rand(maxLimit = workContent.paperLib.length) {
        let rand = Math.random() * maxLimit;
        return Math.floor(rand);
       }

    render(){
    let { landingWork } = this.state
    return (
        <div className={workStyles.container}>
            <div className={workStyles.content}>
                <img src={images(`./${landingWork.type}/${landingWork.file}.jpg`)} alt={landingWork.title}/>
                <p><em>{landingWork.title}</em>; {landingWork.year}; {landingWork.materials}, {landingWork.dimensions}</p>      
            </div>
        </div>
    )
    }
}

export default HomeContent
