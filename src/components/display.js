import React, { Component } from "react";
import Content from "./content";
import BigImage from "./BigImage";
import Gallery from "./gallery";
import styles from "../styles/display.module.scss";
import "../styles/index.scss";

class Display extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bigImage: false,
            imageIdx: this.getRandomInt(this.maxLibIdx),
        } 
    }

    maxLibIdx = this.props.library.length;

    getRandomInt = (maxIdx) => {
        let randomValue = Math.random() * maxIdx;
        return Math.floor(randomValue);
    }
    
    bigImageRef = React.createRef();
    zoomRef = React.createRef();

    handleImageSelect = (e) => { 
        if(e.target.id === "l") {
            this.state.imageIdx === 0 ?
                this.setState({ imageIdx: this.maxLibIdx - 1 })
                : this.setState({ imageIdx: this.state.imageIdx - 1 });
        } else if(e.target.id === "r") {
            this.state.imageIdx === this.maxLibIdx -1 ?
                this.setState({ imageIdx: 0 })
                : this.setState({ imageIdx: this.state.imageIdx + 1 });
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
                    id: "l"
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
            <div className={styles.container}>
                {this.state.bigImage ? 
                    <BigImage
                        landingWork={this.props.library[this.state.imageIdx]}
                        imageIdx={this.state.imageIdx} 
                        zoomRef={this.zoomRef}
                        bigImageRef={this.bigImageRef}
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