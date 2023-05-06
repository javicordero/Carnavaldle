import { Autor } from './autor.model';
import { Piece } from './piece.model';

export interface Agrupacion {
  _id?: string;
  name?: string;
  year?: number;
  modalidad?: string;
  autores?: Autor[];
  pieces?: Piece[];
}
