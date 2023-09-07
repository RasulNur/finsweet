import { FC } from "react";
import HeaderImg from "../../../img/author-page-img.png";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

import "./authorPageHeader.scss";
const AuthorPageHeader: FC = () => {
    return (
        <div className="author-header">
            <div className="container">
                <div className="author-header__wrapper">
                    <img
                        src={HeaderImg}
                        alt="Andrew Jonhson"
                        className="author-header__img"
                    />
                    <div className="author-header__text-box">
                        <h1 className="author-header__heading">
                            Hey there, I’m Andrew Jonhson and welcome to my Blog
                        </h1>
                        <p className="author-header__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Non blandit massa enim nec.
                            Scelerisque viverra mauris in aliquam sem. At risus
                            viverra adipiscing at in tellus.
                        </p>
                        <div className="author-header__socials">
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
                </div>
            </div>
        </div>
    );
};

export default AuthorPageHeader;
