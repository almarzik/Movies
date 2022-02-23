import React from "react";

import { NavLink } from "react-router-dom";

import DateView from "components/DateView";

import { routeMain as routeFilmsDetails } from "pages/FilmsDetails";

import { IFilmsDetail } from "types/IFilmsDetail";
import { IFilms } from "types/IFilms";
import "./styles.scss";

interface IFilmsItemParams {
     item: IFilms;
}

const FilmsItem: React.FC<IFilmsItemParams> = ({ item }) => (
     <NavLink
          className="filmsItem"
          to={routeFilmsDetails(item.show.id.toString())}
          key={item.show.id}
     >
          <div className="films__card">
               {item.show.image ? (
                    <img src={item.show.image.medium} alt="" />
               ) : null}
               <h3 className="films__title">{item.show.name}</h3>
               <div className="films__wrapper-bottom">
                    <div className="films__wrap">
                         <DateView value={item.show.premiered} />
                         {item.show.network ? (
                              <p className="films__country">
                                   ({item.show.network.country.name})
                              </p>
                         ) : null}
                    </div>
                    <p className="films__genre">
                         {item.show.genres.join(", ")}
                    </p>
               </div>
          </div>
     </NavLink>
);

export default FilmsItem;
