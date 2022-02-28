import { AnyAction } from "redux";
import { IStore } from "./types";

const initialState = {
      list: [],
}

const filmsReducer = (state: IStore = initialState, action:AnyAction) => {
      switch(action.type) {
            case 'films/setFilms': 
                  return {...state, list: [...action.payload] }
            case 'filmsDetails/setFilmsDetails': 
                  return {...state, ...action.payload }
            case 'filmsSearch/setFilmsSearch': 
                  return {...state, list: [...action.payload] }
            default:
                  return state;
      }
}

export default filmsReducer;
