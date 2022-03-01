import { AnyAction } from "redux";
import { IStore } from "./types";

const initialState = {
      mainList: [],
      categoryList: [],
      filmsDetail:null,
      searchList: [] 
}

const filmsReducer = (state: IStore = initialState, action:AnyAction) => {
      switch(action.type) {
            case 'filmsMain/setFilmsMain': 
                  return {...state, mainList: [...action.payload] }
            case 'filmsCategory/setFilmsCategory': 
                  return {...state, categoryList: [...action.payload] }
            case 'filmsDetails/setFilmsDetails': 
                  return {...state, filmsDetail: {...action.payload} }
            case 'filmsSearch/setFilmsSearch': 
                  return {...state, searchList: [...action.payload] }
            default:
                  return state;
      }
}

export default filmsReducer;
