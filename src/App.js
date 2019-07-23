import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import throttle from 'lodash.throttle';

import './App.css';

import Layout from './components/Layout/Layout';

import Intro from './pages/Intro/Intro';
import Portfolio from './pages/Portfolio/Portfolio';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

class App extends Component {
    state = {
        isDesktop: window.innerWidth >= 1000,
    };

    handleWindowResize = () => {
        this.setState({ isDesktop: window.innerWidth >= 1000 });
    };

    componentDidMount() {
        window.addEventListener(
            'resize',
            throttle(() => {
                this.handleWindowResize();
            }, 200)
        );
    }

    componentWillUnmount() {
        window.removeEventListener(
            'resize',
            throttle(() => {
                this.handleWindowResize();
            }, 200)
        );
    }

    render() {
        const { isDesktop } = this.state;
        return (
            <HashRouter>
                <div>
                    <Layout isDesktop={isDesktop}>
                        <Switch>
                            <Route path="/portfolio/" render={() => <Portfolio isDesktop={isDesktop} />} />
                            <Route path="/about/" component={About} />
                            <Route path="/contact/" component={Contact} />
                            <Route path="/" exact component={Intro} />
                            <Redirect to="/" />
                        </Switch>
                    </Layout>
                </div>
            </HashRouter>
        );
    }
}

export default App;
