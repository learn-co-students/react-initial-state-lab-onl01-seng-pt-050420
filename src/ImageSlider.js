// your ImageSlider code here!
import React, { Component } from 'react';

export default class ImageSlider extends Component {
    constructor(){
        super();
        this.state = {
            currentSlideIndex: 0
          }

    }
    render() {
        return (
          <div 
            className="image-slider"
            //style={{backgroundColor: this.state.color}}
            //onClick={this.handleClick}>
            >
               { `I am on slide ${this.state.currentSlideIndex}` }
          </div>
        )
      }
      
    }
