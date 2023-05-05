import { Agrupacion } from './agrupacion.model';

export interface Autor {
  _id?: string;
  name?: string;
  apodo?: string;
  agrupaciones?: Agrupacion[];
}
