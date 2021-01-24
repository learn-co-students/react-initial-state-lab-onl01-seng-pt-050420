// your Bomb code here!
import React from 'react';

class Bomb extends React.Component {
   constructor(){
       super();
    this.state = {
        secondsLeft: props.initialCount
      }
    }
    render() {
        const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds until I go boom!`;
        return (
          <div 
            className="bomb"
            //style={{backgroundColor: this.state.color}}
            //onClick={this.handleClick}>
            >
               
            {message}
          </div>
        )
      }
      
    }
