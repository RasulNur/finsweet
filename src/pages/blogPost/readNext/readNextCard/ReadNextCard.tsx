import { FC } from "react";
import "./readNextCard.scss";
// import ReadNextImg1 from "../../../../../public/read-next/01.png";
// import ReadNextImg2 from "../../../../../public/read-next/02.png";
// import ReadNextImg3 from "../../../../../public/read-next/03.png";
import { Link } from "react-router-dom";
interface IReadNextCardProps {
    img: string;
}

const ReadNextCard: FC<IReadNextCardProps> = ({ img }) => {
    return (
        <div className="read-next-card">
            <Link to="/blog/post">
                <img
                    src={img}
                    alt="A UX Case Study Creating a Studious Environment for Students:"
                    className="read-next-card__img"
                />
            </Link>

            <div className="read-next-card__content">
                <p className="read-next-card__created">
                    By <span>John Doe</span> | Aug 23, 2021
                </p>
                <Link to="/blog/post">
                    <h3 className="read-next-card__heading">
                        A UX Case Study Creating a Studious Environment for
                        Students:
                    </h3>
                </Link>
                <p className="read-next-card__text">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident.
                </p>
            </div>
        </div>
    );
};

export default ReadNextCard;
