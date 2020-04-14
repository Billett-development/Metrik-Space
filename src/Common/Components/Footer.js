import React from "react";
import { FaInstagram, FaFacebookSquare, FaLinkedin, FaAngleDoubleUp } from "react-icons/fa";

import "../Styles/_Footer.scss"

const DEFAULT_CLASSNAME = "navigation";

export default class Services extends React.Component {

    render() {
        return (
            <div className="footer">
                <div className="footer__arrow">
                    <FaAngleDoubleUp className="arrow-icon"/>
                </div>
                <div className="footer__container">
                    <div className="footer__container-item">
                        <FaInstagram className="instagram-icon"/>
                    </div>
                    <div className="footer__container-item">
                        <FaFacebookSquare className="facebook-icon"/>
                    </div>
                    <div className="footer__container-item">
                        <FaLinkedin className="linkedIn-icon"/>
                    </div>
                </div>  

                <div class="footer__copyright">
                    &copy; Metrik Space 2020
                </div>

            </div>
        );
      }
}