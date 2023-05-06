import { Agrupacion } from './agrupacion.model';

export interface Piece {
  _id?: string;
  quotes?: string[];
  agrupacion?: Agrupacion;
  lyrics?: string;
  part?: string;
}
