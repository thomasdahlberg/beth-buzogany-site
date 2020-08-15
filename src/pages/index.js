import React from "react"
import "../styles/index.scss"

import Layout from "../components/layout"
import Head from "../components/head"
import HomeContent from "../components/home"

const HomePage = () => {
  return(
    <Layout>
      <Head title="Home" />
      <HomeContent />
    </Layout>
  )
}

export default HomePage