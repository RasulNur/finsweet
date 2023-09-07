import { FC } from "react";
import OutStoryBg from "../../../../public/our-story.png";
import { FaAngleRight } from "react-icons/fa";

import "./ourStory.scss";
import { Link } from "react-router-dom";

const OurStory: FC = () => {
    return (
        <section className="our-story">
            <div className="container">
                <div className="our-story__wrapper">
                    <img
                        src={OutStoryBg}
                        alt="Out story"
                        className="our-story__img"
                    />
                    <div className="our-story__content">
                        <h5 className="our-story__subheading">
                            Why we started
                        </h5>
                        <h1 className="our-story__heading">
                            It started out as a simple idea and evolved into our
                            passion
                        </h1>
                        <p className="our-story__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut
                            aliquip.
                        </p>
                        <Link to="about" className="our-story__btn">
                            Discover our story <FaAngleRight />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStory;
