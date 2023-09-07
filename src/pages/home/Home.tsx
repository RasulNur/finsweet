import { FC } from "react";

import Introduction from "./introduction/Introduction";
import Posts from "./posts/Posts";
import AboutUs from "./aboutUs/AboutUs";
import Categories from "../../ui/categories/Categories";
import OurStory from "./ourStory/OurStory";
import Authors from "../../ui/authors/Authors";
import Companies from "./companies/Companies";
import Reviews from "./reviews/Reviews";

import "./home.scss";
import JoinUs from "../../ui/joinUs/JoinUs";

const Home: FC = () => {
    return (
        <div className="home">
            <Introduction />
            <Posts />
            <AboutUs />
            <Categories heading="Chose A Category" headingCenter={true} />
            <OurStory />
            <Authors count={4} />
            <Companies />
            <Reviews />
            <JoinUs />
        </div>
    );
};

export default Home;
