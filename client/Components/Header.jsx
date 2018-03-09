import React, { Component } from 'react';

export default class Header extends Component {

  render() {
    return(
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Twende</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="">Register</a></li>
            <li><a href="badges.html">Add Bus</a></li>
          </ul>
        </div>
        </nav>
    )
  }
}
