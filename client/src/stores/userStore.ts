import { makeAutoObservable } from 'mobx';
import { IUserFromForm, userFromFormKeys } from '../models';
import { getArray } from '../helpers/general-js';
import AuthService from '../services/AuthService';

export class UserStore {
  user = {};

  constructor() {
    makeAutoObservable(this);
  }

  async signUp(formData: FormData) {
    const userFromFormData = this.getUserFromFormData(formData);
    const authResponse = await AuthService.signUp(userFromFormData);

    localStorage.setItem('accessToken', authResponse.data.accessToken);

    this.user = authResponse.data;
  }

  private getUserFromFormData(formData: FormData) {
    return Object.fromEntries(
      getArray(formData.entries()).filter(this.isThereEntryKeyInUserKeys)
    ) as IUserFromForm;
  }

  private isThereEntryKeyInUserKeys(entry: [string, FormDataEntryValue]) {
    const key = entry[0];

    return (userFromFormKeys as unknown as string[]).includes(key);
  }
}

export const userStore = new UserStore();
