import { $axios } from '../http';
import { AxiosResponse } from 'axios';
import { IUserFromForm, AuthResponse } from '../models';

export default class AuthService {
  static async signUp(
    user: IUserFromForm
  ): Promise<AxiosResponse<AuthResponse>> {
    return $axios.post<AuthResponse>('/user/sign-up', user);
  }

  // static async signIn(
  //   email: string,
  //   password: string
  // ): Promise<AxiosResponse<AuthResponse>> {
  //   return $axios.post('/user/sign-in', { email, password });
  // }

  // static async signOut() {
  //   return $axios.post('/user/sign-out');
  // }
}
