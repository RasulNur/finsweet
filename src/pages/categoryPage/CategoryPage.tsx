import { FC } from "react";
import CategoryHeader from "./categoryHeader/CategoryHeader";
import "./categoryPage.scss";
import CategoryRow from "./categoryRow/CategoryRow";
import CategoryFilter from "./categoryFilter/CategoryFilter";

const CategoryPage: FC = () => {
    return (
        <div className="category-page">
            <CategoryHeader />
            <div className="container">
                <div className="category-page__content">
                    <CategoryRow />
                    <CategoryFilter />
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;
