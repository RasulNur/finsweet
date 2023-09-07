import { FC } from "react";
import "./aboutUsPage.scss";
import JoinUs from "../../ui/joinUs/JoinUs";
import Authors from "../../ui/authors/Authors";
import AboutUsHeader from "./aboutUsHeader/AboutUsHeader";
import OurTeam from "./ourTeam/OurTeam";
import WhyStarted from "./whyStarted/WhyStarted";
const AboutUs: FC = () => {
    return (
        <div className="about-us-page">
            <AboutUsHeader />
            <OurTeam />
            <WhyStarted />
            <Authors count={8} />
            <JoinUs />
        </div>
    );
};

export default AboutUs;
