import { FC } from "react";

import WhyStartedImg from "../../../img/why-started.png";
import "./whyStarted.scss";
const WhyStarted: FC = () => {
    return (
        <section className="why-started">
            <div className="container">
                <div className="why-started__wrapper">
                    <div className="why-started__img-box">
                        <img
                            src={WhyStartedImg}
                            alt="Why we started this Blog"
                            className="why-started__img"
                        />
                    </div>
                    <div className="why-started__text-box">
                        <h2 className="why-started__heading">
                            Why we started this Blog
                        </h2>
                        <h4 className="why-started__subheading">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt.
                        </h4>
                        <p className="why-started__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyStarted;
