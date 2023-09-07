import { FC } from "react";
import OurTeamImg from "../../../img/our-team.png";

import "./ourTeam.scss";
const OurTeam: FC = () => {
    return (
        <section className="our-team">
            <div className="container">
                <div className="our-team__wrapper">
                    <div className="our-team__text-box">
                        <h2 className="our-team__heading">
                            Our team of creatives
                        </h2>
                        <h4 className="our-team__subheading">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt.
                        </h4>
                        <p className="our-team__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat.
                        </p>
                    </div>
                    <div className="our-team__img-box">
                        <img
                            src={OurTeamImg}
                            alt="Our team of creatives"
                            className="our-team__img"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurTeam;
