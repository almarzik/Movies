import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import DateView from "components/DateView";

import { useSelector } from "react-redux";
import { selectList } from "store/films/selectors";

import { ID } from "types/ID";
import star from "../../assets/star.png";
import routeMain from "./routes";

import "./styles.scss";
import { IFilms } from "types/IFilms";
import getFilms from "services/getFilms";
import { IFilmsDetail } from "types/IFilmsDetail";

const FilmsDetails = () => {
     const { id } = useParams<ID>();

     const [films, setFilms] = useState<IFilms | undefined>(undefined);
     const filmsList = useSelector(selectList);

     useEffect(() => {
          const currentFilms = filmsList?.find(
               (item: IFilmsDetail) => item.show.id.toString() == id
          );
          setFilms(currentFilms);
     }, [id, filmsList]);
     return (
          <section className="filmsDetailPage">
               {films ? (
                    <div className="filmsDetailWrapper">
                         {films.show.image.medium ? (
                              <img
                                   className="films__img"
                                   src={films.show.image.medium}
                                   alt={films.show.name}
                              />
                         ) : null}

                         <div className="mainWrapper__info">
                              <div className="mainInfo__title">
                                   <h3 className="info__title">
                                        {films.show.name}
                                   </h3>
                                   <div className="star">
                                        <img
                                             src={star}
                                             alt={star}
                                             width="43"
                                             height="43.13"
                                        />
                                        {films.show.rating.average ? (
                                             <p className="average">
                                                  {films.show.rating.average}/10
                                             </p>
                                        ) : null}
                                   </div>
                              </div>
                              <div className="main__info">
                                   <div className="wrap year">
                                        <h4 className="title year__title">
                                             Год выхода
                                        </h4>
                                        <p>{films.show.premiered}</p>
                                   </div>
                                   <div className="wrap country">
                                        <h4 className="title country__title">
                                             Страна
                                        </h4>
                                        {films.show.network ? (
                                             <p>
                                                  {
                                                       films.show.network
                                                            .country.name
                                                  }
                                             </p>
                                        ) : (
                                             <p>Неизвестно</p>
                                        )}
                                   </div>

                                   <div className="wrap genre">
                                        <h4 className="title genre__title">
                                             Жанр
                                        </h4>
                                        <p>{films.show.genres.join(", ")}</p>
                                   </div>
                                   <div className="wrap summary">
                                        <h4 className="title summary__title">
                                             Описание
                                        </h4>
                                        <p className="summary__text">
                                             {films.show.summary.replace(
                                                  /<\/?[a-zA-Z]+>/gi,
                                                  ""
                                             )}
                                        </p>
                                   </div>
                              </div>
                         </div>
                    </div>
               ) : (
                    <></>
               )}
          </section>
     );
};

export { routeMain };

export default FilmsDetails;

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// import DateView from "components/DateView";
// import { loadFilmsDetails } from "store/films/actions";
// import { useDispatch, useSelector } from "react-redux";
// import { selectList } from "store/films/selectors";

// import { ID } from "types/ID";
// import star from "../../assets/star.png";
// import routeMain from "./routes";

// import "./styles.scss";
// import { IFilms } from "types/IFilms";
// import getFilms from "services/getFilms";
// import { IFilmsDetail } from "types/IFilmsDetail";

// const FilmsDetails = () => {
//      const { id } = useParams<ID>();
//      const dispatch = useDispatch();
//      // const [films, setFilms] = useState<IFilms | undefined>(undefined);
//      const filmsList = useSelector(selectList);
//      useEffect(() => {
//           dispatch(loadFilmsDetails(id.toString()));
//      }, [dispatch, filmsList]);
//      // useEffect(() => {
//      //      const currentFilms = filmsList?.find(
//      //           (item: IFilmsDetail) => item.show.id.toString() == id
//      //      );
//      //      setFilms(currentFilms);
//      // }, [id, filmsList]);
//      return (
//           <section className="filmsDetailPage">
//                {filmsList.map((films) => (
//                     <div className="filmsDetailWrapper " key={films.show.id}>
//                          {films.show.image.medium ? (
//                               <img
//                                    className="films__img"
//                                    src={films.show.image.medium}
//                                    alt={films.show.name}
//                               />
//                          ) : null}

//                          <div className="mainWrapper__info">
//                               <div className="mainInfo__title">
//                                    <h3 className="info__title">
//                                         {films.show.name}
//                                    </h3>
//                                    <div className="star">
//                                         <img
//                                              src={star}
//                                              alt={star}
//                                              width="43"
//                                              height="43.13"
//                                         />
//                                         {films.show.rating.average ? (
//                                              <p className="average">
//                                                   {films.show.rating.average}
//                                                   /10
//                                              </p>
//                                         ) : null}
//                                    </div>
//                               </div>
//                               <div className="main__info">
//                                    <div className="wrap year">
//                                         <h4 className="title year__title">
//                                              Год выхода
//                                         </h4>
//                                         <p>{films.show.premiered}</p>
//                                    </div>
//                                    <div className="wrap country">
//                                         <h4 className="title country__title">
//                                              Страна
//                                         </h4>
//                                         {films.show.network ? (
//                                              <p>
//                                                   {
//                                                        films.show.network
//                                                             .country.name
//                                                   }
//                                              </p>
//                                         ) : (
//                                              <p>Неизвестно</p>
//                                         )}
//                                    </div>

//                                    <div className="wrap genre">
//                                         <h4 className="title genre__title">
//                                              Жанр
//                                         </h4>
//                                         <p>{films.show.genres.join(", ")}</p>
//                                    </div>
//                                    <div className="wrap summary">
//                                         <h4 className="title summary__title">
//                                              Описание
//                                         </h4>
//                                         {/* <p className="summary__text">
//                                                   {films.show.summary.replace(
//                                                        /<\/?[a-zA-Z]+>/gi,
//                                                        ""
//                                                   )}
//                                              </p> */}
//                                    </div>
//                               </div>
//                          </div>
//                     </div>
//                ))}
//           </section>
//      );
// };

// export { routeMain };

// export default FilmsDetails;
