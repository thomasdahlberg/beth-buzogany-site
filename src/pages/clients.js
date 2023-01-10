import React from "react";
import Layout from "../components/layout";
import styles from "../styles/about.module.scss";

const clientList = ['Pillsbury', 'Green Giant', 'Old El Paso', `Mrs. Field's`, 'Smart Ones', 'Quaker Oats', 'Keebler', `Kellogg's`, 'Food Lion', 'NAPA Auto', 'Toyota', `Hellman's`, 'Aldi', 'Kansas City Steaks', 'American Girl Magazine', 'The Oprah Show', 'Guideposts', 'The Pampered Chef', 'Farmland Foods', 'TGI Fridays', 'Fatz Cafe', 'Calphalon', 'Jamba Juice', 'Publix', 'Bi-Lo', `Sam's Club`, `Applebee's`, 'Reynolds Group', 'ConAgra Foods', `Libby's`, 'Sara Lee', `Jimmy John's`, 'Hebrew National', 'Nestlé', 'Boston Market', `Carr's`]
const sortedClientList = clientList.sort().map((client, index) => {
    return <li key={index} className={styles.list}>{client}</li>
})

const Clients = () => {        
    return (
        <Layout title="Clients">
            <section className={styles.section} aria-describedby="client-sub-header">
                <h3 id="client-sub-header">Clients</h3>
                <ul aria-describedby="client-sub-header">
                    {sortedClientList}
                </ul>
            </section>
        </Layout>
    )
}

export default Clients
