import React, { useEffect } from "react";
import routeMain from "./routes";

import { useDispatch, useSelector } from "react-redux";
import { loadFilmsCategory } from "store/films/actions";
import { selectCategoryList } from "store/films/selectors";
import CategoryFilms from "components/CategoryTitle";
import FilmsCategory from "components/FilmsCategory";

import "./styles.scss";

const FilmsPage = () => {
     const dispatch = useDispatch();
     const filmsListCategory = useSelector(selectCategoryList);

     useEffect(() => {
          dispatch(loadFilmsCategory());
     }, [dispatch]);
     return (
          <div className="filmsPage">
               <CategoryFilms title="Books" />
               {filmsListCategory.length > 0 && (
                    <FilmsCategory list={filmsListCategory} />
               )}
          </div>
     );
};
export { routeMain };
export default FilmsPage;
