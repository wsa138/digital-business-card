import React, { Component } from 'react';
import me from './my_photo.jpg';

class CardHead extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <img src={me} alt="Photo of me" />
      </div>
    );
  }
}

export default CardHead;
