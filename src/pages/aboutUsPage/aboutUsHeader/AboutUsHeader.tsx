import { FC } from "react";
import "./aboutUsHeader.scss";
const AboutUsHeader: FC = () => {
    return (
        <section className="about-header">
            <div className="container">
                <div className="about-header__top">
                    <div className="about-header__heading-box">
                        <h5 className="about-header__subheading">ABOUT US</h5>
                        <div className="about-header__heading">
                            We are a team of content writers who share their
                            learnings
                        </div>
                    </div>
                    <p className="about-header__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </p>
                </div>
                <div className="about-header__bottom">
                    <div className="about-header__img-wrapper">
                        <div className="about-header__stats">
                            <p className="about-header__stat">
                                <span>12+</span> Blogs Published
                            </p>
                            <p className="about-header__stat">
                                <span>18K+</span> Views on Finsweet
                            </p>
                            <p className="about-header__stat">
                                <span>30K+</span> Total active Users
                            </p>
                        </div>
                    </div>
                    <div className="about-header__our-wrapper">
                        <div className="about-header__our">
                            <h5 className="about-header__our-subheading">
                                Our mision
                            </h5>
                            <h3 className="about-header__our-heading">
                                Creating valuable content for creatives all
                                around the world
                            </h3>
                            <p className="about-header__our-text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Non
                                blandit massa enim nec. Scelerisque viverra
                                mauris in aliquam sem. At risus viverra
                                adipiscing at in tellus.
                            </p>
                        </div>

                        <div className="about-header__our">
                            <h5 className="about-header__our-subheading">
                                Our Vision
                            </h5>
                            <h3 className="about-header__our-heading">
                                A platform that empowers individuals to improve
                            </h3>
                            <p className="about-header__our-text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Non
                                blandit massa enim nec. Scelerisque viverra
                                mauris in aliquam sem. At risus viverra
                                adipiscing at in tellus.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsHeader;
