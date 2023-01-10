import React from 'react';
import styles from "../styles/gallery.module.scss";

const images = require.context("../../public/images", true);

const Gallery = (props) => {
    return (
        <div className={styles.gallery}>
            {props.library.map(({ node }, idx) =>
                <button 
                    className={styles.button} 
                    key={idx} 
                    form={idx} 
                    onClick={props.handleImageSelect}
                >
                    <img 
                        key={idx} 
                        id={idx}  
                        src={images(`./thumbs/${node.type}/${node.file}.jpg`)} 
                        alt={node.title}
                    />
                </button>
            )}
        </div>
    )
}

export default Gallery;