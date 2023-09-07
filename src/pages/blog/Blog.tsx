import { FC } from "react";
import FeaturedPost from "./featuredPost/FeaturedPost";
import "./blog.scss";
import AllPosts from "./allPosts/AllPosts";
import JoinUs from "../../ui/joinUs/JoinUs";
import Categories from "../../ui/categories/Categories";
const Blog: FC = () => {
    return (
        <div className="blog">
            <FeaturedPost />
            <AllPosts />
            <Categories heading="All categories" />
            <JoinUs />
        </div>
    );
};

export default Blog;
