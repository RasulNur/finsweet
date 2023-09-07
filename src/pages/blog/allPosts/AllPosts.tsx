import { FC } from "react";
import "./allPosts.scss";
import Post from "../../../ui/post/Post";
const AllPosts: FC = () => {
    const postsData = [
        {
            subheading: "Startup",
            heading: "Design tips for designers that cover everything you need",
            img: "../../../../public/all-posts/post1.png",
            text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        },

        {
            subheading: "BUSINESS",
            heading: "How to build rapport with your web design clients",
            img: "../../../../public/all-posts/post2.png",
            text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        },

        {
            subheading: "Startup",
            heading: "Logo design trends to avoid in 2022",
            img: "../../../../public/all-posts/post3.png",
            text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        },

        {
            subheading: "TECHNOLOGY",
            heading: "8 Figma design systems you can download for free today",
            img: "../../../../public/all-posts/post4.png",
            text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        },
        {
            subheading: "ECONOMY",
            heading: "Font sizes in UI design: The complete guide to follow",
            img: "../../../../public/all-posts/post5.png",
            text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        },
    ];
    return (
        <section className="all-posts">
            <div className="container">
                <h1 className="all-posts__heading">All posts</h1>
                <div className="all-posts__row">
                    {postsData.map((el) => {
                        return (
                            <Post
                                key={el.heading}
                                subheading={el.subheading}
                                heading={el.heading}
                                img={el.img}
                                text={el.text}
                            />
                        );
                    })}
                </div>

                <div className="all-posts__pagination">
                    <button className="all-posts__pagination-btn">
                        {"< Prev"}
                    </button>
                    <button className="all-posts__pagination-btn">
                        {"Next >"}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AllPosts;
