import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import "../styles/index.scss"

const HomePage = () => {
  return(
    <Layout>
      <Head title="Thomas Dahlberg" />
      <div>
        <img src="./images/homeimgs/soma.jpg"/>
        <p><em>Sôma</em>; 2020; acrylic, dirt, pencil and foam board, 6in x 9in x 9in</p>      
      </div>
    </Layout>
  )
}

export default HomePage