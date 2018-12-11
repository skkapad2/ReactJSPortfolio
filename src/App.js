import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
       <div className="demo-big-content">
    <Layout>
<<<<<<< HEAD
        <Header className="header-color" title={<a href="/">Sagar's Portfolio</a>} scroll>
=======
        <Header className="header-color" title="Sagar's Portfolio" scroll>
>>>>>>> 876ddf9bfd781825a9386464192c6638105a1b29
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Sagar's Portfolio">
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
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
