import React, {Component} from "react";
import "../styles/index.scss"
import Layout from "../components/layout";
import Head from "../components/head";
import Display from "../components/display";
// import HomeContent from "../components/home"
let workContent = require('../components/workContent');

class HomePage extends Component {
  constructor(props) {
    super(props)
    let random = this.rand(); 
    this.state = {
        homeImages: workContent.homeLib,
        landingWork: workContent.homeLib[random]
    };
  }

  rand(maxLimit = workContent.paintLib.length) {
    let rand = Math.random() * maxLimit;
    return Math.floor(rand);
  }

  refreshState = () => {
    let random = this.rand();
    this.setState({
      landingWork: workContent.homeLib[random]
    })
  }
    
  componentDidMount(){
    this.refreshState();
  }

  render(){
    return(
        <Layout>
          <Head title="Home" />
          <Display
            homepage={true}
            landingWork={this.state.landingWork}
            homeImages={this.state.homeImages}
          />
          {/* <HomeContent
            landingWork={this.state.landingWork}
            homeImages={this.state.homeImages}
          /> */}
        </Layout>
      )
  }
}

export default HomePage