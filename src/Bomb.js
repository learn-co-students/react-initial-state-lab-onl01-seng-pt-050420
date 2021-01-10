import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super();
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  renderCountDown = () => {
    if (this.state.secondsLeft > 0) {
      return <p>{this.state.secondsLeft} seconds left before I go boom!</p>
    }
    else {
      return <p>Boom!</p>
    }
  }

  render() {
    return (
      <span>{this.renderCountDown()}</span>
    );
  }
}

export default Bomb;