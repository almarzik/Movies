import React, { useEffect, useState, ChangeEvent } from "react";

import { useDispatch, useSelector } from "react-redux";

import FilmsList from "components/FilmsList";

import routeMain from "./routes";
import "./styles.scss";
import { selectList } from "store/films/selectors";
import { loadFilmsSearch, loadFilms } from "store/films/actions";
import FilmsCategory from "components/FilmsCategory";

const SearchPage = () => {
     const dispatch = useDispatch();
     const filmsList = useSelector(selectList);
     const [value, setValue] = useState("");

     //      useEffect(() => {
     //           dispatch(loadFilms());
     //      }, [dispatch]);

     useEffect(() => {
          dispatch(loadFilmsSearch(value));
     }, [dispatch, value]);

     const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
          const value = e.target.value;
          setValue(value);
     };

     return (
          <section className="cards mainSearchPage">
               <h1 className="search__title">Поиск по категории</h1>
               <input
                    type="text"
                    value={value}
                    onChange={handleInputChange}
                    placeholder="Введите жанр"
               />
               <h2 className="search__result">Результаты поиска:</h2>
               {filmsList.length ? (
                    <FilmsCategory list={filmsList} />
               ) : (
                    <h2 className="search__null">
                         Введите поисковой запрос для отображения результатов
                    </h2>
               )}
          </section>
     );
};

export { routeMain };

export default SearchPage;
