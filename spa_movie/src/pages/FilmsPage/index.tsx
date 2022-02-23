import React, { useEffect } from "react";
import routeMain from "./routes";

import { useDispatch, useSelector } from "react-redux";
import { loadFilms } from "store/films/actions";
import { selectList } from "store/films/selectors";
import CategoryFilms from "components/CategoryTitle";
import FilmsCategory from "components/FilmsCategory";

import "./styles.scss";

const FilmsPage = () => {
     const dispatch = useDispatch();
     const filmsList = useSelector(selectList);

     useEffect(() => {
          dispatch(loadFilms());
     }, [dispatch]);
     return (
          <div className="filmsPage">
               <CategoryFilms title="Arrow" />
               {filmsList.length > 0 && <FilmsCategory list={filmsList} />}
          </div>
     );
};
export { routeMain };
export default FilmsPage;
