import { FC } from "react";
import ReviewImg from "../../../../../public/review-img.png";
import "./review.scss";
const Review: FC = () => {
    return (
        <div className="review">
            <p className="review__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="review__author">
                <img src={ReviewImg} alt="" className="review__author-img" />

                <div className="review__author-info">
                    <h4 className="review__author-name">Jonathan Vallem</h4>
                    <p className="review__author-address">New york, USA</p>
                </div>
            </div>
        </div>
    );
};

export default Review;
