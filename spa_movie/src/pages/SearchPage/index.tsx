import React, { useEffect, useState, ChangeEvent } from "react";

import { useDispatch, useSelector } from "react-redux";
import useDebounce from "./hooks/useDebounce";

import routeMain from "./routes";
import "./styles.scss";
import { selectList } from "store/films/selectors";
import { loadFilmsSearch } from "store/films/actions";
import FilmsCategory from "components/FilmsCategory";

const SearchPage = () => {
     const [searchTerm, setSearchTerm] = useState("");
     const [results, setResults] = useState([]);
     const debouncedSearchTerm = useDebounce(searchTerm, 1000);

     const dispatch = useDispatch();
     const filmsList = useSelector(selectList);

     useEffect(() => {
          if (debouncedSearchTerm) {
               dispatch(loadFilmsSearch(debouncedSearchTerm));
               setResults(results);
          } else {
               setResults([]);
          }
     }, [dispatch, debouncedSearchTerm]);

     return (
          <section className="cards mainSearchPage">
               <h1 className="search__title">Поиск по категории</h1>
               <input
                    type="text"
                    onChange={(e) => setSearchTerm(e.target.value)}
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
