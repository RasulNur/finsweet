import { FC } from "react";
import FeaturedPostImg from "../../../img/featuredPost.png";
import { FaAngleRight } from "react-icons/fa";
import "./featuredPost.scss";
import { Link } from "react-router-dom";
const FeaturedPost: FC = () => {
    return (
        <section className="featured-post">
            <div className="container">
                <div className="featured-post__wrapper">
                    <div className="featured-post__content">
                        <h5 className="featured-post__subheading">
                            Featured Post
                        </h5>
                        <h2 className="featured-post__heading">
                            Step-by-step guide to choosing great font pairs
                        </h2>
                        <p className="featured-post__created">
                            By <span>John Doe</span> | May 23, 2022
                        </p>
                        <p className="featured-post__text">
                            Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident.
                        </p>

                        <Link to="/blog/post" className="featured-post__btn">
                            Read more <FaAngleRight />
                        </Link>
                    </div>
                    <img
                        src={FeaturedPostImg}
                        alt="Featured Post"
                        className="featured-post__img"
                    />
                </div>
            </div>
        </section>
    );
};

export default FeaturedPost;
