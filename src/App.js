import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './Components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
    <Layout className="main-container">
        <Header className="header-color" title="#ThangVu" scroll>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/project">Portfolio</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/">#ThangLife</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="#ThangVu">
            <Navigation>
            <Link to="/">Home</Link>
            <Link to="/project">Portfolio</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/">#ThangLife</Link>
            <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
  </div>

    );
  }
}

export default App;