import React from "react";

import FilmsCategoryItem from "./components/FilmsCategoryItem";

import { IFilmsDetail } from "types/IFilmsDetail";
import "./styles.scss";

interface IFilmsListParams {
     list: IFilmsDetail[];
}

const FilmsCategory: React.FC<IFilmsListParams> = ({ list }) => (
     <div className="filmsCategoryList">
          {list.map((films: IFilmsDetail) => (
               <FilmsCategoryItem key={films.show.id} item={films} />
          ))}
     </div>
);

export default FilmsCategory;
