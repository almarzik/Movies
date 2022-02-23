import { responseEncoding } from "axios"
import React from "react"
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


export const loadFilms = () => async (dispatch: Dispatch) => {
      try {
            const { data } = await getFilms();
            dispatch(setFilmsAction(data))
      } catch(e) {
            alert(e)
      }
}
export const loadFilmsSearch = (value:string) => async (dispatch: Dispatch) => {
      try {
            const { data } = await getSearchFilms(value);
            dispatch(setFilmsAction(data))
      } catch(e) {
            alert(e)
      }
}
export const loadFilmsDetails = (id:string) => async (dispatch: Dispatch) => {
      try {
            const { data } = await getFilmsDetails(id);
            dispatch(setFilmsAction(data))
      } catch(e) {
            alert(e)
      }
}
