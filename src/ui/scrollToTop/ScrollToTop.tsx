import { useEffect, FC } from "react";
import { useLocation } from "react-router";

type Props = {
    children: string | JSX.Element | JSX.Element[];
    // | () => JSX.Element
};

const ScrollToTop: FC<Props> = ({ children }) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return <>{children}</>;
};

export default ScrollToTop;
