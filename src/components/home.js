import React from "react"
import homeStyles from "./home.module.scss";

const HomeContent = (props) => {
    return (
        <div className={homeStyles.container}>
            <div className={homeStyles.content}>
                <img src={`./images/${props.landingWork.type}/${props.landingWork.file}.jpg`} alt="soma sculpture"/>
                <p><em>{props.landingWork.title}</em>; {props.landingWork.year}; {props.landingWork.materials}, {props.landingWork.dimensions}</p>      
            </div>
        </div>
    )
}

export default HomeContent
