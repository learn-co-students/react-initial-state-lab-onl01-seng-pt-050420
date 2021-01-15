import React, { Component } from 'react'


export default class Bomb extends Component {
    constructor(props) {
        super();
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render() {
        if (this.state.secondsLeft !== 0) {
            return (
                <div>
                    <p>{this.state.secondsLeft} seconds left before I go boom!</p>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>Boom!</h1>
                </div>
            )
        }

    }
}
