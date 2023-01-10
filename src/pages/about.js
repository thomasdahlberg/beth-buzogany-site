import React from "react";
import Layout from "../components/layout";
import styles from "../styles/about.module.scss";

const About = () => {        
    return (
        <Layout title="About">
            <section className={styles.section}>
                <h3>About Me</h3>
                <div className={styles.image}></div>
                <p>Beth Buzogany has over twenty years of experience as a food stylist and home economist. She has been engaged as a food stylist for projects of all types, including national advertising campaigns, television commercials, packaging, cookbooks, and editorial features.</p>
                <p>Beth has coordinated sampling for live television audiences, developed recipes, and appeared on-air to demonstrate cooking techniques and recipe preparation. Her impressive client list includes such well-known enterprises as Pillsbury, The Biltmore Estate, The Pampered Chef and The Oprah Show.</p>
                <p>Beth combines her expert culinary and artistic talents with her innovative problem-solving skills to create images that are not only mouth-watering but also exceed the clients' expectations every time. Her sense of humor and comfortable personality make for a pleasant day on set.</p>
                <p>Beth holds a Bachelor of Science degree in Home Economics from Erskine College in South Carolina, and she also studied Hospitality Management. Before focusing on food styling, she was a flight attendant, consumer educator, and commercial producer.</p>
                <p>Beth resides on a mini-farm in the mountains of North Carolina with her husband, cat, dog, flock of chickens and guineas, and two hives of bees. She works locally in Charlotte, Atlanta, and Chicago and travels for engagements all over the country. She and her husband, Buz, have two grown children. Her interests include painting, gardening, tennis, and hiking.</p>
            </section>
            <section className={styles.section}>
                <h3>Contact</h3>
                <a href="tel:+18473021506">847-302-1506</a>
                <a href="mailto:bethbuzogany@gmail.com">bethbuzogany@gmail.com</a>
            </section>
        </Layout>
    )
}

export default About
