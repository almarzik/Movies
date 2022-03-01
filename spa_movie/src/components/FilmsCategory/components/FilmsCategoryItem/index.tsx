import React from "react";

import { NavLink } from "react-router-dom";

import { routeMain as routeFilmsDetails } from "pages/FilmsDetails";

import { IFilms } from "types/IFilms";

import NotImage from "../../../../assets/imageNot.jpg";

import "./styles.scss";

interface IFilmsItemParams {
     item: IFilms;
}

const FilmsCategoryItem: React.FC<IFilmsItemParams> = ({ item }) => (
     <NavLink
          className="filmsCategoryItem"
          to={routeFilmsDetails(item.show.id.toString())}
     >
          <div className="filmsCategory__card">
               {item.show.image ? (
                    <img
                         className="card__img"
                         src={item.show.image.medium}
                         alt=""
                    />
               ) : (
                    <img className="card__img" src={NotImage} alt="" />
               )}
               <div className="names__wrapper">
                    <h3 className="films__title">{item.show.name}</h3>
                    <div className="films__wrapper-bottom">
                         <p className="films__genre">
                              {item.show.genres.join(", ")}
                         </p>
                    </div>
               </div>
          </div>
     </NavLink>
);

export default FilmsCategoryItem;
