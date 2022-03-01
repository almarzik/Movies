import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { loadFilmsDetails } from "store/films/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectFilmsDetail } from "store/films/selectors";

import NotImage from "../../assets/imageNot.jpg";

import { ID } from "types/ID";
import star from "../../assets/star.png";
import routeMain from "./routes";

import "./styles.scss";
import { IFilmsDetail } from "types/IFilmsDetail";

const FilmsDetails = () => {
     const { id } = useParams<ID>();
     const dispatch = useDispatch();
     const filmsListDetail = useSelector(selectFilmsDetail);
     useEffect(() => {
          dispatch(loadFilmsDetails(id.toString()));
     }, [dispatch, id]);

     return (
          <section className="filmsDetailPage">
               {filmsListDetail && (
                    <div
                         className="filmsDetailWrapper "
                         key={filmsListDetail.id.toString()}
                    >
                         {filmsListDetail.image ? (
                              <img
                                   className="films__img"
                                   src={filmsListDetail.image.medium}
                                   alt={filmsListDetail.name}
                              />
                         ) : (
                              <img
                                   className="films__img"
                                   src={NotImage}
                                   alt=""
                              />
                         )}

                         <div className="mainWrapper__info">
                              <div className="mainInfo__title">
                                   <h3 className="info__title">
                                        {filmsListDetail.name}
                                   </h3>
                                   <div className="star">
                                        <img
                                             src={star}
                                             alt={star}
                                             width="43"
                                             height="43.13"
                                        />
                                        {filmsListDetail.rating.average ? (
                                             <p className="average">
                                                  {
                                                       filmsListDetail.rating
                                                            .average
                                                  }
                                                  /10
                                             </p>
                                        ) : (
                                             <p className="average">NA /10</p>
                                        )}
                                   </div>
                              </div>
                              <div className="main__info">
                                   <div className="wrap year">
                                        <h4 className="title year__title">
                                             Год выхода
                                        </h4>
                                        {filmsListDetail.premiered ? (
                                             <p>{filmsListDetail.premiered}</p>
                                        ) : (
                                             <p>Неизвестно</p>
                                        )}
                                   </div>
                                   <div className="wrap country">
                                        <h4 className="title country__title">
                                             Страна
                                        </h4>
                                        {filmsListDetail.network ? (
                                             <p>
                                                  {
                                                       filmsListDetail.network
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
                                        <p>
                                             {filmsListDetail.genres.length ? (
                                                  filmsListDetail.genres.join(
                                                       ", "
                                                  )
                                             ) : (
                                                  <p>Неизвестно</p>
                                             )}
                                        </p>
                                   </div>
                                   <div className="wrap summary">
                                        <h4 className="title summary__title">
                                             Описание
                                        </h4>
                                        {filmsListDetail.summary ? (
                                             <p className="summary__text">
                                                  {filmsListDetail.summary.replace(
                                                       /<\/?[a-zA-Z]+>/gi,
                                                       ""
                                                  )}
                                             </p>
                                        ) : (
                                             <p>Неизвестно</p>
                                        )}
                                   </div>
                              </div>
                         </div>
                    </div>
               )}
          </section>
     );
};

export { routeMain };

export default FilmsDetails;
