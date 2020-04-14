import React from "react";
import Bounce from "react-reveal/Bounce";

import "../Styles/_Services.scss";
import web from "../../Images/WEB.png";
import controller from "../../Images/controller.png";
import headset from "../../Images/lens-2.png";

const DEFAULT_CLASSNAME = "navigation";

export default class Services extends React.Component {
  render() {
    return (
      <div className="services-section">
        <div className="services">
          <Bounce top>
            <div className="services__header">What We Do</div>
          </Bounce>

          <div className="services__container">
            <Bounce left>
              <div className="services__container-item">
                <img src={headset} />
              </div>
            </Bounce>
            <Bounce bottom>
              <div className="services__container-item">
                <img src={web} />
              </div>
            </Bounce>
            <Bounce right>
              <div className="services__container-item">
                <img src={controller} />
              </div>
            </Bounce>
          </div>
        </div>
      </div>
    );
  }
}
