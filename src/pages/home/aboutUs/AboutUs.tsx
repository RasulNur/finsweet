import { FC } from "react";
import { FaAngleRight } from "react-icons/fa";
import "./aboutUs.scss";
import { Link } from "react-router-dom";
const AboutUs: FC = () => {
    return (
        <section className="about-us">
            <div className="container">
                <div className="about-us__wrapper">
                    <div className="about-us__left">
                        <h5 className="about-us__left-subheading subheading">
                            ABOUT US
                        </h5>
                        <h2 className="about-us__left-heading">
                            We are a community of content writers who share
                            their learnings
                        </h2>
                        <p className="about-us__left-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                        <Link to="/about" className="about-us__read-more">
                            Read more <FaAngleRight />
                        </Link>
                    </div>
                    <div className="about-us__right">
                        <h5 className="about-us__right-subheading subheading">
                            Our mision
                        </h5>
                        <h3 className="about-us__right-heading">
                            Creating valuable content for creatives all around
                            the world
                        </h3>
                        <p className="about-us__right-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
