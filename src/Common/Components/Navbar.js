import React from "react";

import "../Styles/_Navbar.scss"

const DEFAULT_CLASSNAME = "navigation";

export default class Navbar extends React.Component {
  
    render() {
      return (
        <div className="navigation navigation-section">
            <div className="navigation__container">
                <div className="navigation__container-item">
                    Home
                </div>
                <div className="navigation__container-item">
                    About
                </div>
                <div className="navigation__container-item">
                    Portfolio
                </div>
                <div className="navigation__container-item">
                    Contact
                </div>
            </div>
        </div>
      );
    }
  
  
  }