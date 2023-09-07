import FeaturedImg from "../../../../../public/featured-img.png";
import { FC } from "react";
import { FaAngleRight } from "react-icons/fa";
import "./featured-card.scss";
import { Link } from "react-router-dom";

const FeaturedCard: FC = () => {
    return (
        <div className="featured-card">
            <Link to="/blog/post">
                <img
                    src={FeaturedImg}
                    alt="Featured"
                    className="featured-card__img"
                />
            </Link>
            <div className="featured-card__content">
                <p className="featured-card__created">
                    By <span>John Doe</span> | May 23, 2022
                </p>
                <Link to="/blog/post">
                    <h3 className="featured-card__heading">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor.
                    </h3>
                </Link>
                <p className="featured-card__text">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident.
                </p>
                <Link className="featured-card__btn" to="/blog/post">
                    Read More <FaAngleRight />
                </Link>
            </div>
        </div>
    );
};

export default FeaturedCard;
