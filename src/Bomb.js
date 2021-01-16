// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {
    constructor(props) {
        super()
        this.state={
            secondsLeft: props.initialCount
        }
    }

    bombText = ()=> {
        return this.state.secondsLeft === 0? "Boom!": `${this.state.secondsLeft} seconds left before I go boom!`   
    }
    
    render() {
        return (
            this.bombText()
        )
    }
}