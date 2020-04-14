import React from "react";
import Bounce from 'react-reveal/Bounce';

import "../Styles/_Services.scss"

const DEFAULT_CLASSNAME = "navigation";

export default class Services extends React.Component {

    render() {
        return (
        <div className="services-section">
            <div className="services">
                <Bounce top>
                    <div className="services__header">
                        What We Do
                    </div>
                </Bounce>
                
                <div className="services__container">
                    <Bounce left>
                        <div className="services__container-item">
                            item 1
                        </div>
                    </Bounce>
                    <Bounce bottom>
                        <div className="services__container-item">
                            item 2
                        </div>
                    </Bounce>
                    <Bounce right>
                        <div className="services__container-item">
                            item 3
                        </div>
                    </Bounce>
                </div>
            </div>
        </div>
        );
      }
}