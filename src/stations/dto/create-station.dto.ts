import { User } from '../../users/dto/create-user.dto';

class Station {
  id: string;
  name: string;
  latitude: string;
  longitude: string;
  createdBy?: User;
  creatorUserId?: string;
}

export default Station