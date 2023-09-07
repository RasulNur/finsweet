import { FC } from "react";

import "./categoryCard.scss";
import { Link } from "react-router-dom";
interface ICategoryCardProps {
    heading: string;
    text: string;
    icon: string;
}

const CategoryCard: FC<ICategoryCardProps> = ({ heading, text, icon }) => {
    return (
        <Link to="/category">
            <div className="category-card">
                <img src={icon} className="category-card__icon" alt={heading} />
                <h3 className="category-card__heading">{heading}</h3>
                <p className="category-card__text">{text}</p>
            </div>
        </Link>
    );
};

export default CategoryCard;
