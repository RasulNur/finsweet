import { FC } from "react";
import "./categoryFilter.scss";
const CategoryFilter: FC = () => {
    const categoriesData = [
        {
            heading: "Business",
            icon: "../../../public/category/category1.png",
        },
        {
            heading: "Startup",
            icon: "../../../public/category/category2.png",
        },
        {
            heading: "Economy",
            icon: "../../../public/category/category3.png",
        },
        {
            heading: "Technology",
            icon: "../../../public/category/category4.png",
        },
    ];

    const tagsData = [
        "Business",
        "Experience",
        "Screen",
        "Technology",
        "Marketing",
        "Life",
    ];

    return (
        <div className="category-filter">
            <div className="category-filter__categories">
                <h2 className="category-filter__heading">Categories</h2>
                <div className="category-filter__row">
                    {categoriesData.map((el) => {
                        return (
                            <div
                                className="category-filter-card"
                                key={el.heading}>
                                <img
                                    src={el.icon}
                                    alt={el.heading}
                                    className="category-filter-card__img"
                                />
                                <h3 className="category-filter-card__heading">
                                    {el.heading}
                                </h3>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="category-filter__tags">
                <h2 className="category-filter__tags-heading">All Tags</h2>
                <div className="category-filter__tags-row">
                    {tagsData.map((el) => {
                        return (
                            <div className="category-filter__tag" key={el}>
                                {el}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default CategoryFilter;
