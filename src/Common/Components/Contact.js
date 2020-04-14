import React, { useState } from 'react';
import axios from "axios";

import "../Styles/_Contact.scss"

const DEFAULT_CLASSNAME = "navigation";

export default function Contact() {

    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
      });
    
      const handleServerResponse = (ok, msg, form) => {
        setServerState({
          submitting: false,
          status: { ok, msg }
        });
        if (ok) {
          form.reset();
        }
      };
      const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        setServerState({ submitting: true });
        axios({
          method: "post",
          url: "https://formspree.io/mvobdenk",
          data: new FormData(form)
        })
          .then(r => {
            handleServerResponse(true, "Thanks!", form);
          })
          .catch(r => {
            handleServerResponse(false, r.response.data.error, form);
          });
      };

        return (
            <div className="contact-section">
                <div className="contact">
                    <div className="contact__header">
                        Pop Us A Message
                    </div>
                    <form onSubmit={handleOnSubmit} className="contact__container">
                        <input type="text" class="form__container-nameInput" name="name" id="name" placeholder="Full Name"/>
                        <label for="name" class="form__container-nameLabel">Full name</label>

                        <input type="email" name="email" placeholder="Your email" id="email" />
                        <label for="email" class="form__container-emailLabel">Email address</label>

                        <textarea name="message" rows="10" cols="30" />
                        <button disabled={serverState.submitting}  value="Submit" className="contact__container-submit">Send</button>
                        {serverState.status && (
                            <p className={!serverState.status.ok ? "errorMsg" : ""}>
                            {serverState.status.msg}
                            </p>
                        )}
                    </form>
                    
                </div>
            </div>
        );
      
}