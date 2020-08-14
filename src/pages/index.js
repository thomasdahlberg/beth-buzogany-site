import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import HomeContent from "../components/home"
import "../styles/index.scss"
import Painting from "../components/painting"

const HomePage = () => {
  return(
    <Layout>
      <Head title="Home" />
      {/* <HomeContent /> */}
      <Painting />
    </Layout>
  )
}

export default HomePage