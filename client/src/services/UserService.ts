import { $axios } from '../http';
import { AxiosResponse } from 'axios';
import { AuthResponse } from '../models';

export default class UserService {
  static async fetchAllUsers(): Promise<AxiosResponse<AuthResponse[]>> {
    return $axios.get<AuthResponse[]>('/user');
  }
}
