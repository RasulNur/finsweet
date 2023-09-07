import { FC } from "react";
import CategoryPageImg from "../../../../../public/category-page-img.png";
import "./categoryPageCard.scss";
import { Link } from "react-router-dom";
interface ICategoryPageCardProps {
    heading: string;
}

const CategoryPageCard: FC<ICategoryPageCardProps> = ({ heading }) => {
    return (
        <div className="category-page-card">
            <Link to="/blog/post" className="category-page-card__img-link">
                <img
                    src={CategoryPageImg}
                    alt={heading}
                    className="category-page-card__img"
                />
            </Link>

            <div className="category-page-card__text-box">
                <h5 className="category-page-card__subheading">Business</h5>

                <Link to="/blog/post">
                    <h2 className="category-page-card__heading">{heading}</h2>
                </Link>
                <p className="category-page-card__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Non blandit massa enim nec.
                </p>
            </div>
        </div>
    );
};

export default CategoryPageCard;
