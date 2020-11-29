import React, { Fragment } from 'react';
import "../styles/index.scss";
import styles from "../styles/content.module.scss";

const images = require.context("../../public/images", true);


const Content = (props) => {
    let imageURI = images(`./${props.landingWork.node.type}/${props.landingWork.node.file}.jpg`);

    let boundingBox = {
        backgroundImage: "url(" + imageURI + ")",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%",
    }

    return (
        <div className={styles.content}>
            {props.homepage ?
                <Fragment>
                    <div 
                        style={boundingBox} 
                        className="desktop-layout"
                    >
                    </div>
                    <img 
                        className="mobile-layout" 
                        src={imageURI} 
                        alt={props.landingWork.node.title} 
                    />
                    <p>
                        <em>{props.landingWork.node.title}</em>
                        <span>; {props.landingWork.node.year}; {props.landingWork.node.materials}, {props.landingWork.node.dimensions}</span>
                    </p>
                </Fragment>
                :
                <div className={styles.buttonContainer}>
                    <button 
                        id="l"
                        className={styles.navButton}
                        onClick={props.handleImageSelect} 
                        onKeyDown={props.handleKeyDown}
                    >
                        &lsaquo;
                    </button>
                    <div className={styles.imgbtn}>
                        <button
                            tabIndex="-1" 
                            onKeyDown={props.handleKeyDown}
                            onClick={props.handleToggleBigImage}
                            className={styles.imgbtnbtn}
                        >
                            <div
                                className="desktop-layout"
                                style={boundingBox}
                            >
                            </div>
                            <img
                                className="mobile-layout"
                                src={imageURI}
                                alt={props.landingWork.node.title}
                            />
                            <p>
                                <em>{props.landingWork.node.title}</em>
                                <span>; {props.landingWork.node.year}; {props.landingWork.node.materials}; {props.landingWork.node.dimensions}</span>
                            </p>
                        </button>
                    </div>
                    <button
                        id="r" 
                        className={styles.navButton} 
                        onClick={props.handleImageSelect}
                        onKeyDown={props.handleKeyDown}
                    >
                        &rsaquo;
                    </button>
                </div>
            }
        </div>
    )
}

export default Content;