import React from 'react';
import "../styles/index.scss";
import styles from "../styles/content.module.scss";

const images = require.context("../../public/images", true);


const Content = (props) => {
    return (
        <div className={styles.content}>
            {props.homepage ?
                <figure className={styles.homepage}>
                    <img
                        src={images(`./full/${props.landingWork.node.type}/${props.landingWork.node.file}.jpg`)}
                        alt={props.landingWork.node.title}
                        id={props.landingWork.node.id}
                        className={styles.responsive}
                    />
                </figure>
                :
                <div className={styles.buttonContainer}>
                    <button 
                        id="l"
                        aria-label="scroll image left"
                        className={styles.navButton}
                        onClick={props.handleImageSelect} 
                        onKeyDown={props.handleKeyDown}
                        style={{cursor: 'w-resize'}}
                    >
                        &lsaquo;
                    </button>
                    <div className={styles.imgbtn}>
                        <button
                            tabIndex="-1"
                            aria-label="enlarge image" 
                            onKeyDown={props.handleKeyDown}
                            onClick={props.handleToggleBigImage}
                            className={styles.imgbtnbtn}
                        >
                            <figure>
                                <img
                                    src={images(`./full/${props.landingWork.node.type}/${props.landingWork.node.file}.jpg`)}
                                    alt={props.landingWork.node.title}
                                    id={props.landingWork.node.id}
                                    className={styles.responsive}
                                />
                            </figure>
                        </button>
                    </div>
                    <button
                        id="r"
                        aria-label="scroll image right"
                        className={styles.navButton} 
                        onClick={props.handleImageSelect}
                        onKeyDown={props.handleKeyDown}
                        style={{cursor: 'e-resize'}}
                    >
                        &rsaquo;
                    </button>
                </div>
            }
        </div>
    )
}

export default Content;