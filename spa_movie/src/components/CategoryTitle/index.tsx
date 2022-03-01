import React from "react";
import "./styles.scss";

interface ICategoryParams {
     title: string;
}

const CategoryFilms: React.FC<ICategoryParams> = ({ title }) => (
     <div className="category">
          <p className="category__head">Выбранная категория: </p>
          <div className="category__title">{title}</div>
     </div>
);

export default CategoryFilms;
