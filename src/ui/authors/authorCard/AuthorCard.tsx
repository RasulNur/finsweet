import { FC } from "react";

import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

import "./authorCard.scss";
import { Link } from "react-router-dom";
interface IAuthorCardProps {
    name: string;
    position: string;
    img: string;
}

const AuthorCard: FC<IAuthorCardProps> = ({ name, position, img }) => {
    return (
        <Link to="/author">
            <div className="author-card">
                <img src={img} alt={name} />
                <h3 className="author-card__name">{name}</h3>
                <p className="author-card__position">{position}</p>
                <div className="author-card__socials">
                    <Link to="#">
                        <BsFacebook />
                    </Link>

                    <Link to="#">
                        <BsTwitter />
                    </Link>

                    <Link to="#">
                        <BsInstagram />
                    </Link>

                    <Link to="#">
                        <BsLinkedin />
                    </Link>
                </div>
            </div>
        </Link>
    );
};

export default AuthorCard;
