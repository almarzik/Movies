import { Dispatch } from "redux"
import getFilms from "services/getFilms"
import getFilmsDetails from "services/getFilmsDetails"
import getSearchFilms from "services/getSearchFilms"
import { IStore } from "./types"

export const setFilmsMainAction = (mainList: IStore['mainList']) => {
      return {
            type: 'filmsMain/setFilmsMain',
            payload: mainList,
      }
}
export const setFilmsCategoryAction = (categoryList: IStore['categoryList']) => {
      return {
            type: 'filmsCategory/setFilmsCategory',
            payload: categoryList,
      }
}

export const setFilmsDetailsAction = (filmsDetail: IStore['filmsDetail']) => {
      return {
            type: 'filmsDetails/setFilmsDetails',
            payload: filmsDetail,
      }
}
export const setFilmsSearchAction = (searchList: IStore['searchList']) => {
      return {
            type: 'filmsSearch/setFilmsSearch',
            payload: searchList,
      }
}

export const loadFilmsMain = () => async (dispatch: Dispatch) => {
      try {
            const { data } = await getFilms();
            dispatch(setFilmsMainAction(data))
      } catch(e) {
            console.log(e)
      }
}
export const loadFilmsCategory = () => async (dispatch: Dispatch) => {
      try {
            const { data } = await getFilms();
            dispatch(setFilmsCategoryAction(data))
      } catch(e) {
            console.log(e)
      }
}


export const loadFilmsSearch = (value:string) => async (dispatch: Dispatch) => {
      try {
            const { data } = await getSearchFilms(value);
            dispatch(setFilmsSearchAction(data))
      } catch(e) {
            console.log(e)
      }
}
export const loadFilmsDetails = (id:string) => async (dispatch: Dispatch) => {
      try {
            const { data } = await getFilmsDetails(id);
            dispatch(setFilmsDetailsAction(data))
      } catch(e) {
            console.log(e)
      }
}
