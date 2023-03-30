import React from "react";
import Layout from "../components/layout";
import styles from "../styles/about.module.scss";

const About = () => {        
    return (
        <Layout title="About">
            <div className={styles.container}>
                <section className={styles.section}>
                    <h3>About Me</h3>
                    <img className={styles.image} src="./beth-headshot.jpg" alt="headshot of Beth Buzogany"/>
                    <p>Beth Buzogany's degree in Home Economics and her background as a consumer educator and  commercial producer laid a solid foundation for her future as a food stylist; her artistic eye, steady hand, and creativity proved to be good tools on set. She began her career in Los Angeles, assisting one of the country's leading food stylists and then transitioned to styling in Chicago, working on packaging and advertising campaigns, both still and motion, for national clients. A final move returned Beth and her husband Buz to the mountains of western NC where they met, and she now works throughout the southeast, the mid-Atlantic, and Chicago. She is known for her attention to detail, her sense of humor, and for always having a Plan B, and usually a Plan C.</p>
                    <p>On her days off, if you stop by Full Circle Farm, you may find her working in her raised bed gardens, tending her bees, painting with pastels, or preparing to go hiking in the mountains. She and Buz enjoy traveling, especially to visit their grandchildren.</p>
                </section>
                <section className={styles.section}>
                    <h3>Contact</h3>
                    <a href="tel:+18473021506">847-302-1506</a>
                    <a href="mailto:bethbuzogany@gmail.com">bethbuzogany@gmail.com</a>
                </section>
            </div>
        </Layout>
    )
}

export default About
