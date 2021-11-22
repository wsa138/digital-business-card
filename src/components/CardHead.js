import React, { Component } from 'react';
import me from '/home/william/the-odin-project/other-projects/digital-business-card/src/images/my_photo.jpg';

class CardHead extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="sectionContainer" id="head">
        <img src={me} alt="Photo of me" id="photo" />
        <h1 id="name">Billy Addesso</h1>
        <h2 id="role">Frontend Developer</h2>
        <p id="githubLink">wsa138.github.io/bootstrap-portfolio</p>
        <div id="buttonContainer">
          <button id="email">Email</button>
          <button id="linkedin">Linkedin</button>
        </div>
      </div>
    );
  }
}

export default CardHead;
