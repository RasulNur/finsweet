import { FC } from "react";
import AuthorImg from "../../../img/review-img.png";
import TagImg from "../../../img/blog-post-tag.png";
import ArticleImg from "../../../img/article-img.png";
import "./article.scss";
const Article: FC = () => {
    return (
        <article className="article">
            <div className="container">
                <div className="article__header">
                    <div className="article__author">
                        <img src={AuthorImg} alt="Andrew Jonson" />
                        <div className="article__author-info">
                            <h3 className="article__author-name">
                                Andrew Jonson
                            </h3>
                            <p className="article__author-posted">
                                Posted on 27th January 2022
                            </p>
                        </div>
                    </div>
                    <h1 className="article__heading">
                        Step-by-step guide to choosing great font pairs
                    </h1>
                    <h4 className="article__tag">
                        <img
                            src={TagImg}
                            alt="Tag"
                            className="article__tag-img"
                        />
                        Startup
                    </h4>
                </div>
                <img
                    src={ArticleImg}
                    alt="Step-by-step guide to choosing great font pairs"
                    className="article__img"
                />
                <div className="article__content">
                    <div className="article__content-section">
                        <h2 className="article__content-heading">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod.
                        </h2>
                        <p className="article__content-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Non blandit massa enim nec.
                            Scelerisque viverra mauris in aliquam sem. At risus
                            viverra adipiscing at in tellus. Sociis natoque
                            penatibus et magnis dis parturient montes. Ridiculus
                            mus mauris vitae ultricies leo. Neque egestas congue
                            quisque egestas diam. Risus in hendrerit gravida
                            rutrum quisque non.
                        </p>
                    </div>
                    <div className="article__content-section">
                        <h2 className="article__content-heading">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod.
                        </h2>
                        <p className="article__content-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Non blandit massa enim nec.
                            Scelerisque viverra mauris in aliquam sem. At risus
                            viverra adipiscing at in tellus. Sociis natoque
                            penatibus et magnis dis parturient montes. Ridiculus
                            mus mauris vitae ultricies leo. Neque egestas congue
                            quisque egestas diam. Risus in hendrerit gravida
                            rutrum quisque non.
                        </p>
                        <p className="article__content-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Non blandit massa enim nec.
                            Scelerisque viverra mauris in aliquam sem. At risus
                            viverra adipiscing at in tellus. Sociis natoque
                            penatibus et magnis dis parturient montes. Ridiculus
                            mus mauris vitae ultricies leo. Neque egestas congue
                            quisque egestas diam. Risus in hendrerit gravida
                            rutrum quisque non.
                        </p>
                        <ul className="article__content-list">
                            <li className="article__content-list-item">
                                Lorem ipsum dolor sit amet
                            </li>
                            <li className="article__content-list-item">
                                Non blandit massa enim nec scelerisque
                            </li>
                            <li className="article__content-list-item">
                                Neque egestas congue quisque egestas
                            </li>
                        </ul>
                        <p className="article__content-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Non blandit massa enim nec.
                            Scelerisque viverra mauris in aliquam sem. At risus
                            viverra adipiscing at in tellus. Sociis natoque
                            penatibus et magnis dis parturient montes. Ridiculus
                            mus mauris vitae ultricies leo. Neque egestas congue
                            quisque egestas diam. Risus in hendrerit gravida
                            rutrum quisque non.
                        </p>
                    </div>
                    <div className="article__content-section">
                        <h2 className="article__content-heading">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod.
                        </h2>
                        <p className="article__content-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Non blandit massa enim nec.
                            Scelerisque viverra mauris in aliquam sem. At risus
                            viverra adipiscing at in tellus. Sociis natoque
                            penatibus et magnis dis parturient montes. Ridiculus
                            mus mauris vitae ultricies leo. Neque egestas congue
                            quisque egestas diam. Risus in hendrerit gravida
                            rutrum quisque non.
                        </p>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Article;
