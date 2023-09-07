import { FC } from "react";
import "./joinUs.scss";
const JoinUs: FC = () => {
    return (
        <section className="join-us">
            <div className="container">
                <div className="join-us__wrapper">
                    <h2 className="join-us__heading">
                        Join our team to be a part of our story
                    </h2>
                    <p className="join-us__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt.
                    </p>
                    <button className="join-us__btn">Join Now</button>
                </div>
            </div>
        </section>
    );
};

export default JoinUs;
