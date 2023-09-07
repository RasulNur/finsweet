import { FC } from "react";
import JoinUs from "../../ui/joinUs/JoinUs";
import Article from "./article/Article";
import "./blogPost.scss";
import ReadNext from "./readNext/ReadNext";
const BlogPost: FC = () => {
    return (
        <div className="blog-post">
            <Article />
            <ReadNext />
            <JoinUs />
        </div>
    );
};

export default BlogPost;
