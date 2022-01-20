export const userFromFormKeys = ['email', 'password'] as const;

export type IUserFromForm = {
  [key in typeof userFromFormKeys[number]]: string;
};

export interface AuthResponse {
  id: string;
  email: string;
  isActivated: boolean;
  refreshToken: string;
  accessToken: string;
}
