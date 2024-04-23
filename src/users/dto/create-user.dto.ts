import Station from '../../stations/dto/create-station.dto';

export class User {
  id: string;
  email: string;
  name?: string;
  birthYear?: number;
  hashedPassword?: string;
  favorites: string[];
  createdAt: Date;
  updatedAt: Date;
}
