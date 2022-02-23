import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { loadFilms } from "store/films/actions";
import { selectList } from "store/films/selectors";

import FilmsList from "components/FilmsList";

import routeMain from "./routes";
import "./styles.scss";

const MainPage = () => {
     const dispatch = useDispatch();
     const filmsList = useSelector(selectList);

     useEffect(() => {
          dispatch(loadFilms());
     }, [dispatch]);
     return (
          <section className="mainPage">
               <div className="main__header">
                    <h1 className="main__title">MOVIESinfo</h1>
                    <p className="main__subtitle">
                         Самый популярный портал о фильмах
                    </p>
               </div>
               <div className="films__cards">
                    {filmsList.length > 0 && (
                         <FilmsList list={filmsList.slice(0, 8)} />
                    )}
               </div>
          </section>
     );
};

export { routeMain };

export default MainPage;
