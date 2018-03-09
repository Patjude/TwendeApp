import React, { Component } from 'react';
import TableBoard from './TableBoard'

export class Landing extends Component {

  render() {
    return(
            <div>
      <nav className="white" role="navigation">
        <div className="nav-wrapper container">
          <a id="logo-container" href="#" className="brand-logo">Logo</a>
          <ul className="right hide-on-med-and-down">
            <li><a href="#">Navbar Link</a></li>
          </ul>

          <ul id="nav-mobile" className="side-nav">
            <li><a href="#">Navbar Link</a></li>
          </ul>
          <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
        </div>
      </nav>

      <div id="index-banner" className="parallax-container">
        <div className="section no-pad-bot">
          <div className="container">
            <br />
            <h1 className="header center teal-text text-lighten-2">TWENDE</h1>
            <div className="row center">
              <h5 className="header col s12 light">Your trusted travelling companion</h5>
            </div>
            <div className="row center">
              <a href="/register" id="download-button" className="btn-large waves-effect waves-light teal lighten-1">Get Started</a>
            </div>

          <br />


        <div className="parallax"><img src="/home/patricia/Twende/public/zambian_bus.jpg" /></div>
      <div />


      {/* <div className="container">
        <div className="section">

          {/* <!--   Icon Section   --> */}
          <div className="row">
            <div className="col s12 m6">
              <div className="icon-block">
                <h2 className="center blue-text"><i className="material-icons">location_on</i></h2>
                <h5 className="center">LOCAL ROUTES</h5>

                <p className="light"> provide a smoother experience for developers.</p>
              </div>
            </div>

            <div className="col s12 m6">
              <div className="icon-block">
                <h2 className="center blue-text"><i className="material-icons">swap_horiz</i></h2>
                <h5 className="center">CITY TO CITY ROUTE</h5>

                <p className="light">platforms allow for a more unified user experience.</p>
              </div>
            </div>


          </div>

        </div>
      </div>


      <div className="parallax-container valign-wrapper">
        <div className="section no-pad-bot">
          <div className="container">
            <div className="row center">
              <h5 className="header col s12 light">A MODERN WAY OF TRAVELLING!!!!!!!!</h5>
            </div>
          </div>
        </div>
        {/* <div className="parallax"><img src="bus1.jpg" alt="Unsplashed bus1.jpg" /></div> */}
      </div>

      <div className="container">
        <div className="section">

          <div className="row">
            <div className="col s12 center">
              <h3><i className="mdi-content-send brown-text"></i></h3>
              <h4>Contact Us</h4>
              <p className="left-align light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>




    )
  }
}
