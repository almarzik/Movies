import { IStore } from "./types";

export const selectMainList = (state: {filmsReducer: IStore}): IStore['mainList'] => state.filmsReducer.mainList;
export const selectCategoryList = (state: {filmsReducer: IStore}): IStore['categoryList'] => state.filmsReducer.categoryList;
export const selectFilmsDetail = (state: {filmsReducer: IStore}): IStore['filmsDetail'] => state.filmsReducer.filmsDetail;
export const selectSearchList = (state: {filmsReducer: IStore}): IStore['searchList'] => state.filmsReducer.searchList;