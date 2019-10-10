import React from 'react';
import Login from './Login';
import Video from './Video';
import { connect } from 'react-redux';
import './App.css';

const ENV = require('dotenv');
ENV.config();

class App extends React.Component {
    state = {
        Admin: false,
        Login: false
    }

    onSubmit = (answere) => {
        this.setState({
            Admin: answere,
            Login: true
        })

    }

    preRender() {
        let logIn = this.state.Login
        return (
            (logIn ? <Video Admin={this.state.Admin} /> : <Login Admin={this.onSubmit} />)

        )
    }

    render() {
        return <div> {this.preRender()} </div>
    }

}

const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps)(App);

