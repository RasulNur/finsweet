import { FC } from "react";
import "./authors.scss";
import AuthorCard from "./authorCard/AuthorCard";
interface IAuthorsProps {
    count: number;
}
const Authors: FC<IAuthorsProps> = ({ count }) => {
    const authorsData = [
        {
            name: "Floyd Miles",
            postion: "Content Writer @Company",
            img: "../../img/authors/author1.png",
        },
        {
            name: "Dianne Russell",
            postion: "Content Writer @Company",
            img: "../../img/authors/author2.png",
        },
        {
            name: "Jenny Wilson",
            postion: "Content Writer @Company",
            img: "../../img/authors/author3.png",
        },
        {
            name: "Leslie Alexander",
            postion: "Content Writer @Company",
            img: "../../img/authors/author4.png",
        },
        {
            name: "Guy Hawkins",
            postion: "Content Writer @Company",
            img: "../../img/authors/author5.png",
        },
        {
            name: "Eleanor Pena",
            postion: "Content Writer @Company",
            img: "../../img/authors/author6.png",
        },
        {
            name: "Robert Fox",
            postion: "Content Writer @Company",
            img: "../../img/authors/author7.png",
        },
        {
            name: "Jacob Jones",
            postion: "Content Writer @Company",
            img: "../../img/authors/author8.png",
        },
    ];
    return (
        <section className="authors">
            <div className="container">
                <h2 className="authors__heading">List of Authors</h2>
                <div className="authors__row">
                    {authorsData.slice(0, count).map((el) => {
                        return (
                            <AuthorCard
                                key={el.name}
                                name={el.name}
                                position={el.postion}
                                img={el.img}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Authors;
