import { Station } from './station.interface';

export interface User {
  id: string;
  email: string;
  name?: string;
  birthYear?: number;
  hashedPassword?: string;
  favorites: Station[];
  createdAt: Date;
  updatedAt: Date;
}
