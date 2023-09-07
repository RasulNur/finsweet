import { FC } from "react";
import { FaAngleRight } from "react-icons/fa";
import "./introduction.scss";
import { Link } from "react-router-dom";
const Introduction: FC = () => {
    return (
        <section className="introduction">
            <div className="container">
                <h5 className="introduction__subheading">
                    Posted on <span>startup</span>
                </h5>
                <h1 className="introduction__heading">
                    Step-by-step guide to choosing great font pairs
                </h1>
                <p className="introduction__created">
                    By <span className="introduction__author">James West</span>{" "}
                    | May 23, 2022
                </p>
                <p className="introduction__text">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident.
                </p>

                <Link to="/blog/post" className="introduction__btn">
                    Read more <FaAngleRight />
                </Link>
            </div>
        </section>
    );
};

export default Introduction;
