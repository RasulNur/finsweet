import { FC } from "react";
import CategoryPageCard from "./categoryPageCard/CategoryPageCard";
import "./categoryRow.scss";
const CategoryRow: FC = () => {
    const cardsData = [
        { heading: "Top 6 free website mockup tools 2022" },
        { heading: "Step-by-step guide to choosing great font pairs" },
        { heading: "Ten free foogle fonts that you should use" },
        { heading: "What did I learn from doing 50+ design sprints?" },
    ];

    return (
        <div className="category-row">
            {cardsData.map((el) => {
                return (
                    <CategoryPageCard heading={el.heading} key={el.heading} />
                );
            })}
        </div>
    );
};

export default CategoryRow;
