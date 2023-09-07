import { FC } from "react";
import "./privacyPolicy.scss";
import PrivacyPolicyHeader from "./privacyPolicyHeader/PrivacyPolicyHeader";
import PrivacyPolicyContent from "./privacyPolicyContent/PrivacyPolicyContent";
const PrivacyPolicy: FC = () => {
    return (
        <div className="privacy-policy">
            <PrivacyPolicyHeader />
            <PrivacyPolicyContent />
        </div>
    );
};

export default PrivacyPolicy;
