import { FC } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.svg";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./footer.scss";
const Footer: FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__top">
                    <Link to="/">
                        <img
                            className="footer__logo"
                            src={Logo}
                            alt="Finsweet"
                        />
                    </Link>

                    <ul className="footer__nav-list">
                        <li className="footer__nav-item">
                            <Link className="footer__nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="footer__nav-item">
                            <Link className="footer__nav-link" to="/blog">
                                Blog
                            </Link>
                        </li>
                        <li className="footer__nav-item">
                            <Link className="footer__nav-link" to="/about">
                                Abouts Us
                            </Link>
                        </li>
                        <li className="footer__nav-item">
                            <Link className="footer__nav-link" to="/contact">
                                Contact Us
                            </Link>
                        </li>
                        <li className="footer__nav-item">
                            <Link
                                className="footer__nav-link"
                                to="/privacy-policy">
                                Privay Policy
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="footer__subscribe">
                    <h2 className="footer__subscribe-heading">
                        Subscribe to our news letter to get latest updates and
                        news
                    </h2>
                    <form className="footer__form">
                        <label className="footer__label">
                            <input
                                type="email"
                                className="footer__input"
                                placeholder="Enter Your Email"
                            />
                        </label>
                        <button className="footer__btn">Subscribe</button>
                    </form>
                </div>
                <div className="footer__bottom">
                    <div className="footer__contacts">
                        <p>Finstreet 118 2561 Fintown</p>
                        <p>Hello@finsweet.com 020 7993 2905</p>
                    </div>

                    <ul className="footer__socials-list">
                        <li className="footer__socials-item">
                            <Link className="footer__social-link" to="#">
                                <BsFacebook />
                            </Link>
                        </li>
                        <li className="footer__socials-item">
                            <Link className="footer__social-link" to="#">
                                <BsTwitter />
                            </Link>
                        </li>
                        <li className="footer__socials-item">
                            <Link className="footer__social-link" to="#">
                                <BsInstagram />
                            </Link>
                        </li>
                        <li className="footer__socials-item">
                            <Link className="footer__social-link" to="#">
                                <BsLinkedin />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
