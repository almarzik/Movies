import { IImage } from "./IImage";
import { INetwork } from "./INetwork";
import { IRating } from "./IRating";

export interface IFilmsDetail {
      show: IFilmsDetail;
      id: number,
      name: string,
      genres: string[],
      image: IImage,
      premiered: string
      network: INetwork,
      summary: string,
      rating: IRating,
}
