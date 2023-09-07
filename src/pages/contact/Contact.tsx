import { FC } from "react";

import "./contact.scss";
const Contact: FC = () => {
    return (
        <div className="contact">
            <div className="container">
                <div className="contact__wrapper">
                    <div className="contact__header">
                        <h5 className="contact__subheading">Contact us</h5>
                        <h1 className="contact__heading">
                            Let’s Start a Conversation
                        </h1>
                        <p className="contact__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim.
                        </p>
                    </div>
                    <div className="contact__contacts">
                        <div>
                            <h5 className="contact__contacts-heading">
                                Working hours
                            </h5>

                            <p className="contact__contacts-bold">
                                Monday To Friday
                            </p>
                            <p className="contact__contacts-bold">
                                9:00 AM to 8:00 PM{" "}
                            </p>
                            <p className="contact__contacts-regular">
                                Our Support Team is available 24/7
                            </p>
                        </div>

                        <div>
                            <h5 className="contact__contacts-heading">
                                Contact Us
                            </h5>

                            <p className="contact__contacts-bold">
                                020 7993 2905
                            </p>
                            <p className="contact__contacts-regular">
                                hello@finsweet.com
                            </p>
                        </div>
                    </div>
                    <form className="contact__form">
                        <label className="contact__label">
                            <input
                                type="text"
                                className="contact__input"
                                placeholder="Full Name"
                            />
                        </label>
                        <label className="contact__label">
                            <input
                                type="email"
                                className="contact__input"
                                placeholder="Your Email"
                            />
                        </label>
                        <label className="contact__label">
                            <input
                                type="text"
                                className="contact__input"
                                placeholder="Query Related"
                            />
                        </label>
                        <label className="contact__label">
                            <textarea
                                rows={5}
                                className="contact__textarea"
                                placeholder="Message"
                            />
                        </label>
                        <button className="contact__btn">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
