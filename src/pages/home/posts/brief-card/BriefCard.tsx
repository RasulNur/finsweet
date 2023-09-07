import { FC } from "react";
import "./brief-card.scss";
import { Link } from "react-router-dom";
const BriefCard: FC = () => {
    return (
        <div className="brief-card">
            <p className="brief-card__created">
                By <span>John Deo </span>| Aug 23, 2021
            </p>
            <Link to="/blog/post">
                <h3 className="brief-card__heading">
                    8 Figma design systems that you can download for free today.
                </h3>
            </Link>
        </div>
    );
};

export default BriefCard;
