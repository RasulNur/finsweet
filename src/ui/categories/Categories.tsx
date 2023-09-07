import { FC } from "react";
import "./categories.scss";
import CategoryCard from "./categoryCard/CategoryCard";

interface ICategoriesProps {
    heading: string;
    headingCenter?: boolean;
}

const Categories: FC<ICategoriesProps> = ({ heading, headingCenter }) => {
    const categoriesData = [
        {
            heading: "Business",
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
            icon: "../../img/category/category1.png",
        },
        {
            heading: "Startup",
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
            icon: "../../img/category/category2.png",
        },
        {
            heading: "Economy",
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
            icon: "../../img/category/category3.png",
        },
        {
            heading: "Technology",
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
            icon: "../../img/category/category4.png",
        },
    ];
    return (
        <section className="categories">
            <div className="container">
                <h2
                    className="categories__heading"
                    style={{
                        textAlign: `${headingCenter ? "center" : "start"}`,
                    }}>
                    {heading}
                </h2>
                <div className="categories__row">
                    {categoriesData.map((el) => {
                        return (
                            <CategoryCard
                                key={el.heading}
                                heading={el.heading}
                                text={el.text}
                                icon={el.icon}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Categories;
