import { User } from './user.interface';

export interface Station {
    id: string;
    name: string;
    latitude: string;
    longitude: string;
    createdBy?: User; 
    creatorUserId?: string;
  }