import React, { Component } from 'react';
import me from '/home/william/the-odin-project/other-projects/digital-business-card/src/images/my_photo.jpg';

class CardHead extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <img src={me} alt="Photo of me" />
        <h1>Billy Addesso</h1>
        <h2>Frontend Developer</h2>
        <p>wsa138.github.io/bootstrap-portfolio</p>
        <button>Email</button>
        <button>Linkedin</button>
      </div>
    );
  }
}

export default CardHead;
