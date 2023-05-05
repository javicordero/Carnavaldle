import { Autor } from './autor.model';

export interface Agrupacion {
  _id?: string;
  name?: string;
  year?: number;
  modalidad?: string;
  autores?: Autor[];
}
