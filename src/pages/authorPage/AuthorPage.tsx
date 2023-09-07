import { FC } from "react";

import "./authorPage.scss";
import AuthorPageHeader from "./authorPageHeader/AuthorPageHeader";
import AuthorPagePosts from "./authorPagePosts/AuthorPagePosts";
const AuthorPage: FC = () => {
    return (
        <div className="author-page">
            <AuthorPageHeader />
            <AuthorPagePosts />
        </div>
    );
};

export default AuthorPage;
