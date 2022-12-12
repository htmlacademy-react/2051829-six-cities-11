import { UserData } from '../types/types';

const USER_KEY_NAME = 'six-cities-user';

export const getUser = (): UserData => {
  const userData = localStorage.getItem(USER_KEY_NAME);
  if (userData) {
    return JSON.parse(userData) as UserData;
  }
  return {} as UserData;
};

export const saveUser = (user: UserData): void => {
  const userData = JSON.stringify(user);
  localStorage.setItem(USER_KEY_NAME, userData);
};

export const dropUser = (): void => {
  localStorage.removeItem(USER_KEY_NAME);
};
