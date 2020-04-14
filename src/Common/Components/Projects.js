import React from "react";

import "../Styles/_Projects.scss"

import lufcLogo from "../../Images/lufc-logo-lg.png"

const DEFAULT_CLASSNAME = "navigation";

export default class Projects extends React.Component {

    render() {
        return (
            <div className="projects-section">
                <div className="projects">
                    <div className="projects__header">Recent works</div>
                </div>
                <div className="projects__container">
                    <div className="projects__container-project">
                        <img src={lufcLogo} />
                    </div>
                    <div className="projects__container-project">
                        Project 2
                    </div>
                    <div className="projects__container-project">
                        Project 3
                    </div>
                </div>
            </div>
        );
      }
}