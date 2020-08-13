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
      </div>
    </Layout>
  )
}

export default HomePage