import { FC } from "react";
import Post from "../../../ui/post/Post";
import "./authorPagePost.scss";
const AuthorPagePosts: FC = () => {
    const postsData = [
        {
            subheading: "BUSINESS",
            heading: "Font sizes in UI design: The complete guide to follow",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            img: "../../../../public/author-page/01.png",
        },
        {
            subheading: "ECONOMY",
            heading: "How to build rapport with your web design clients",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            img: "../../../../public/author-page/02.png",
        },
    ];
    return (
        <div className="author-page-posts">
            <div className="container">
                <div className="author-page-posts__wrapper">
                    <h1 className="author-page-posts__heading">My Posts</h1>
                    <div className="author-page-posts__row">
                        {postsData.map((el) => {
                            return (
                                <Post
                                    subheading={el.subheading}
                                    heading={el.heading}
                                    text={el.text}
                                    img={el.img}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthorPagePosts;
