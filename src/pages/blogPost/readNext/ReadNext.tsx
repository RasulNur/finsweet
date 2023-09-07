import { FC } from "react";
import "./readNext.scss";
import ReadNextCard from "./readNextCard/ReadNextCard";
const ReadNext: FC = () => {
    const cardsData = [
        { img: "../../../../public/read-next/01.png" },
        { img: "../../../../public/read-next/02.png" },
        { img: "../../../../public/read-next/03.png" },
        { img: "../../../../public/read-next/01.png" },
    ];
    return (
        <section className="read-next">
            <div className="container">
                <h2 className="read-next__heading">What to read next</h2>
                <div className="read-next__row">
                    {cardsData.map((el) => {
                        return <ReadNextCard key={el.img} img={el.img} />;
                    })}
                </div>
            </div>
        </section>
    );
};

export default ReadNext;
