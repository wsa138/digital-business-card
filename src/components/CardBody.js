import React, { Component } from 'react';

class CardBody extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="sectionContainer" id="body">
        <h3>About</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <h3>Interests</h3>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. E
        </p>
      </div>
    );
  }
}

export default CardBody;
