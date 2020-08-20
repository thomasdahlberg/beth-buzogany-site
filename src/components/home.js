import React, { Component, Fragment } from "react";
import Media from 'react-media';
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

    rand(maxLimit = workContent.paperLib.length) {
        let rand = Math.random() * maxLimit;
        return Math.floor(rand);
       }

    render(){
    // let { landingWork } = this.state
    return (
        <div>
            <Media queries={{
                small: "(max-width: 599px)",
                large: "(min-width: 600px)",
            }}>
                {matches => (
                    <Fragment>
                        {matches.small && 
                            <div className={workStyles.containerSmall}>
                                <div className={workStyles.contentSmall}>
                                    <img src={images(`./${this.props.landingWork.type}/${this.props.landingWork.file}.jpg`)} alt={this.props.landingWork.title}/>
                                    <p><em>{this.props.landingWork.title}</em>; {this.props.landingWork.year}; {this.props.landingWork.materials}, {this.props.landingWork.dimensions}</p>      
                                </div>
                            </div>
                        }
                        {/* {matches.medium &&
                            <div className={workStyles.containerMedium}>
                                <div className={workStyles.contentMedium}>
                                    <img src={images(`./${landingWork.type}/${landingWork.file}.jpg`)} alt={landingWork.title}/>
                                    <p><em>{landingWork.title}</em>; {landingWork.year}; {landingWork.materials}, {landingWork.dimensions}</p>      
                                </div>
                            </div>
                        } */}
                        {matches.large &&
                            <div className={workStyles.containerLarge}>
                                <div className={workStyles.contentLarge}>
                                    <img src={images(`./${this.props.landingWork.type}/${this.props.landingWork.file}.jpg`)} alt={this.props.landingWork.title}/>
                                    <p><em>{this.props.landingWork.title}</em>; {this.props.landingWork.year}; {this.props.landingWork.materials}, {this.props.landingWork.dimensions}</p>      
                                </div>
                            </div>
                        }
                    </Fragment>
                )}
            </Media>
        </div>
    )
    }
}

export default HomeContent
