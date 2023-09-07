import { FC } from "react";
import "./privacyPolicyHeader.scss";
const PrivacyPolicyHeader: FC = () => {
    return (
        <div className="privacy-policy-header">
            <div className="container">
                <div className="privacy-policy-header__wrapper">
                    <h1 className="privacy-policy-header__heading">
                        Privacy Policy
                    </h1>
                    <p className="privacy-policy-header__text">
                        Last Updated on 27th January 2022
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyHeader;
