import { FC } from "react";
import FeaturedCard from "./featured-card/FeaturedCard";
import BriefCard from "./brief-card/BriefCard";
import "./posts.scss";
import { Link } from "react-router-dom";
const Posts: FC = () => {
    return (
        <section className="posts">
            <div className="container">
                <div className="posts__wrapper">
                    <div className="posts__featured">
                        <h2 className="posts__heading">Featured Post</h2>
                        <FeaturedCard />
                    </div>
                    <div className="posts__all">
                        <div className="posts__all-header">
                            <h2 className="posts__heading">All Posts</h2>
                            <Link className="posts__view-all" to="/blog">
                                View All
                            </Link>
                        </div>
                        <div className="posts__all-row">
                            <BriefCard />
                            <BriefCard />
                            <BriefCard />
                            <BriefCard />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Posts;
