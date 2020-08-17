import React, { Component } from "react"
import homeStyles from "./home.module.scss";
let workContent = require("./workContent")

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

    componentDidUpdate(){
    }

    rand(maxLimit = workContent.paperLib.length) {
        let rand = Math.random() * maxLimit;
        return Math.floor(rand);
       }

    render(){
    let { landingWork } = this.state
    return (
        <div className={homeStyles.container}>
            <div className={homeStyles.content}>
                <img src={`./images/${landingWork.type}/${landingWork.file}.jpg`} alt={landingWork.title}/>
                <p><em>{landingWork.title}</em>; {landingWork.year}; {landingWork.materials}, {landingWork.dimensions}</p>      
            </div>
        </div>
    )
    }
}

export default HomeContent
