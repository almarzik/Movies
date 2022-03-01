import { IFilmsDetail } from "types/IFilmsDetail";

export interface IStore {
      mainList : IFilmsDetail[],
      categoryList : IFilmsDetail[],
      filmsDetail:IFilmsDetail | null,
      searchList: IFilmsDetail[]
}