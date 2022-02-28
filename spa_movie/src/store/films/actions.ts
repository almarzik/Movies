import { Dispatch } from "redux"
import getFilms from "services/getFilms"
import getFilmsDetails from "services/getFilmsDetails"
import getSearchFilms from "services/getSearchFilms"
import { IStore } from "./types"

export const setFilmsAction = (list: IStore['list']) => {
      return {
            type: 'films/setFilms',
            payload: list,
      }
}
export const setFilmsDetailsAction = (list: IStore['list']) => {
      return {
            type: 'filmsDetails/setFilmsDetails',
            payload: list,
      }
}
export const setFilmsSearchAction = (list: IStore['list']) => {
      return {
            type: 'filmsSearch/setFilmsSearch',
            payload: list,
      }
}


export const loadFilms = () => async (dispatch: Dispatch) => {
      try {
            const { data } = await getFilms();
            dispatch(setFilmsAction(data))
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
