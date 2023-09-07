import { FC } from "react";

import "./companies.scss";
const Companies: FC = () => {
    const companiesData = [
        { img: "../../../img/companies/01.png" },
        { img: "../../../img/companies/02.png" },
        { img: "../../../img/companies/03.png" },
        { img: "../../../img/companies/04.png" },
        { img: "../../../img/companies/05.png" },
        { img: "../../../img/companies/06.png" },
    ];
    return (
        <div className="companies">
            <div className="container">
                <ul className="companies__list">
                    {companiesData.map((el) => {
                        return (
                            <li>
                                <img
                                    key={el.img}
                                    src={el.img}
                                    alt="Company Logo"
                                    className="companies__img"
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Companies;
