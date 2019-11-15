import React, { Component } from "react";

class App extends Component {
    constructor() {
        super();
        this.state = {
            loggedIn: false
        }
        this.logIn = this.logIn.bind(this);
    }

    logIn() {
        this.setState(prevState => {
            return {
                loggedIn: !prevState.loggedIn
            }
        })
    }

    render() {
        let buttonText = this.state.loggedIn ? "Log out" : "Log in"
        let displayText = this.state.loggedIn ? "You're logged in" : "You're not logged in"
        return (
            <div>
                <h1>{displayText}</h1>
                <button onClick={this.logIn}>{buttonText}</button>
            </div>
        )
    }
};

export default App;