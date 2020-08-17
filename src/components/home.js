import React, {Component} from "react"
import homeStyles from "./home.module.scss";
let workContent = require("./workContent")

class HomeContent extends Component {
    constructor(props) {
      super(props) 
      this.state = {
          homeImages: workContent.homeLib,
          landingWork: workContent.homeLib[this.rand()]
      };
    }

    rand(maxLimit = workContent.paperLib.length) {
        let rand = Math.random() * maxLimit;
        return Math.floor(rand);
       }

    render(){
    return (
        <div className={homeStyles.container}>
            <div className={homeStyles.content}>
                <img src={`./images/${this.state.landingWork.type}/${this.state.landingWork.file}.jpg`} alt={this.state.landingWork.title}/>
                <p><em>{this.state.landingWork.title}</em>; {this.state.landingWork.year}; {this.state.landingWork.materials}, {this.state.landingWork.dimensions}</p>      
            </div>
        </div>
    )
    }
}

export default HomeContent
