import React, { Component } from "react";
import Content from "./content";
import BigImage from "./BigImage";
import Gallery from "./gallery";
import styles from "../styles/display.module.scss";
import "../styles/index.scss";

class Display extends Component {
    constructor(props) {
        super(props)
        const initialImageIdx = this.getRandomInt(this.maxLibIdx);
        this.state = {
            bigImage: false,
            imageIdx: initialImageIdx,
        } 
    }

    maxLibIdx = this.props.library.length;

    getRandomInt = (maxIdx) => {
        return Math.floor(Math.random() * maxIdx);
    }
    
    handleImageSelect = (e) => {
        const cachedImageIdx = this.state.imageIdx;
        if(e.target.id === "l") {
            cachedImageIdx === 0 ?
                this.setState({ imageIdx: this.maxLibIdx - 1 })
                : this.setState({ imageIdx: cachedImageIdx - 1 });
        } else if(e.target.id === "r") {
            cachedImageIdx === this.maxLibIdx - 1 ?
                this.setState({ imageIdx: 0 })
                : this.setState({ imageIdx: cachedImageIdx + 1 });
        } else {
            e.target.localName === "img" ?
            this.setState({ imageIdx: Number(e.target.id) })
            : this.setState({ imageIdx: Number(e.target.attributes[1].nodeValue) });
        }
    }


    handleToggleBigImage = () => {
        if(this.state.bigImage === false){
            this.setState({ bigImage: true });
        } else {
            this.setState({ bigImage: false });
        }
    }

    handleKeyDown = (e) => {
        e.preventDefault();
        if(e.keyCode === 37){
            let event = { 
                target: {
                    id: "l"
                }
            }
            this.handleImageSelect(event)
        }
        if(e.keyCode === 39){
            let event = { 
                target: {
                    id: "r"
                }
            }
            this.handleImageSelect(event)
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
            <div className={this.props.homepage ? styles.homepage : styles.container}>
                {this.state.bigImage ? 
                    <BigImage
                        landingWork={this.props.library[this.state.imageIdx]}
                        imageIdx={this.state.imageIdx} 
                        handleKeyDown={this.handleKeyDown}
                        handleToggleBigImage={this.handleToggleBigImage}
                    />
                    :
                    <Content 
                        homepage={this.props.homepage}
                        library={this.props.library}
                        landingWork={this.props.library[this.state.imageIdx]}
                        imageIdx={this.state.imageIdx} 
                        handleImageSelect={this.handleImageSelect}
                        handleKeyDown={this.handleKeyDown}
                        handleToggleBigImage={this.handleToggleBigImage}
                    />
                }
                {!this.props.homepage ?
                    <Gallery 
                        library={this.props.library}
                        handleImageSelect={this.handleImageSelect}
                        handleKeyDown={this.handleKeyDown}
                    />
                    : null
                }
            </div>
        )
    }
}

export default Display;