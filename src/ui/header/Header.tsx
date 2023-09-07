import { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.svg";
import "./header.scss";
const Header: FC = () => {
    const [isActive, setIsActive] = useState<boolean>(false);

    useEffect(() => {
        isActive
            ? (document.body.style.overflow = "hidden")
            : (document.body.style.overflow = "auto");
    }, [isActive]);

    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <Link to="/">
                        <img
                            className="header__logo"
                            src={Logo}
                            alt="Finsweet"
                        />
                    </Link>

                    <nav className={`header__nav ${isActive ? "active" : ""}`}>
                        <ul className="header__list">
                            <li
                                className="header__list-item"
                                onClick={() => setIsActive(false)}>
                                <Link className="header__list-link" to="/">
                                    Home
                                </Link>
                            </li>
                            <li
                                className="header__list-item"
                                onClick={() => setIsActive(false)}>
                                <Link className="header__list-link" to="/blog">
                                    Blog
                                </Link>
                            </li>
                            <li
                                className="header__list-item"
                                onClick={() => setIsActive(false)}>
                                <Link className="header__list-link" to="/about">
                                    Abouts Us
                                </Link>
                            </li>
                            <li
                                className="header__list-item"
                                onClick={() => setIsActive(false)}>
                                <Link
                                    className="header__list-link"
                                    to="/contact">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                        <button className="header__nav-btn">Subscribe</button>
                    </nav>
                    <div
                        className={`header__hamburger hamburger ${
                            isActive ? "active" : ""
                        }`}
                        onClick={() => setIsActive(!isActive)}>
                        <span className="header__bar bar"></span>
                        <span className="header__bar bar"></span>
                        <span className="header__bar bar"></span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
