// your ImageSlider code here!
import React, { Component } from 'react';

export default class ImageSlider extends Component {

    constructor(props) {
        super()
        this.state = {'currentSlideIndex': 0}
    }

    incrementIndex() {
        this.setState({currentSlideIndex: currentSlideIndex++})
    }



    render() {
        return `I am on slide ${this.state.currentSlideIndex}`

    }

    
}