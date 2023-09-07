import { FC } from "react";
import "./categoryHeader.scss";

const CategoryHeader: FC = () => {
    return (
        <div className="category-header">
            <div className="container">
                <h1 className="category-header__heading">Business</h1>
                <p className="category-header__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore.
                </p>
                <p className="category-header__breadcumb">
                    {"blog > "}
                    <span>business</span>
                </p>
            </div>
        </div>
    );
};

export default CategoryHeader;
