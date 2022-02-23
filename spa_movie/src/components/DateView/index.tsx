import React from "react";

import prepareDate from "utils/prepareDate";

import "./styles.scss";
interface IDateViewParams {
     value: string;
}

const DateView: React.FC<IDateViewParams> = ({ value }) => {
     const { year } = prepareDate(value);
     return <p className="films__year">{year}</p>;
};

export default DateView;
