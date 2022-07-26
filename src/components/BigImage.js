import React from 'react';
import styles from "../styles/BigImage.module.scss";

const images = require.context("../../public/images", true);

const BigImage = (props) => {
    return (
        <div className={styles.bigImage}>
            <div className={styles.imgbtn}>
                <button
                    tabIndex="-2"
                    onKeyDown={props.handleKeyDown}
                    onClick={props.handleToggleBigImage}
                    aria-label="zoom out image"
                    style={{cursor: 'zoom-out'}}
                >
                    <img
                        src={images(`./${props.landingWork.node.type}/${props.landingWork.node.file}.jpg`)}
                        alt={props.landingWork.node.title}
                        id={props.landingWork.node.id}
                    />
                </button>
            </div>
        </div>
    )
}

export default BigImage;