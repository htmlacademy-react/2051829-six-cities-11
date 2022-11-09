export enum AppRoute {
  Main = '/',
  Login = '/login',
  Room = '/offer/:id',
  Favorites = '/favorites',
  NotFound = '*'
}

export const URL_MARKER_DEFAULT =
  '/img/pin.svg';

export const URL_MARKER_CURRENT =
'/img/pin-active.svg';
