import { FC } from "react";

import "./post.scss";
import { Link } from "react-router-dom";
interface IPostProps {
    subheading: string;
    heading: string;
    text: string;
    img: string;
}

const Post: FC<IPostProps> = ({ subheading, heading, text, img }) => {
    return (
        <div className="post">
            <Link to="/blog/post" className="post__img-link">
                <img src={img} alt={heading} className="post__img" />
            </Link>
            <div className="post__content">
                <h5 className="post__subheading">{subheading}</h5>
                <Link to="/blog/post">
                    <h2 className="post__heading">{heading}</h2>
                </Link>
                <p className="post__text">{text}</p>
            </div>
        </div>
    );
};

export default Post;
