import { FormEvent } from 'react';
import { UserStore } from '../stores/userStore';

class LoginFormService {
  async signUp(e: FormEvent<HTMLFormElement>, userStore: UserStore) {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    await userStore.signUp(formData).catch((err) => {
      if (err.response) {
        console.error(err.response.data);
      } else if (err.request) {
        console.error(err.request);
      } else {
        console.error('Error: ', err.message);
      }
    });
  }
}

export const loginFormService = new LoginFormService();
