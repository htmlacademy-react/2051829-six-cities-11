import { Offer } from '../types/types';

export const offers: Offer[] = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Cologne'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: [
      'Heating',
      'Wi-Fi',
      'Washing',
      'machine',
      'Towels',
      'Heating',
      'Coffee',
      'machine',
      'Baby',
      'seat',
      'Kitchen',
      'Dishwasher',
      'Cabel',
      'TV',
      'Fridge'
    ],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 1,
      isPro: true,
      name: 'Max'
    },
    id: 1,
    images: [
      'img/apartment-01.jpg',
      'img/apartment-03.jpg',
      'img/apartment-02.jpg',
      'img/studio-01.jpg.jpg',
      'img/apartment-01.jpg',
    ],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: 'img/apartment-01.jpg',
    price: 120,
    rating: 1,
    title: 'mocks 1',
    type: 'Apartment'
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    goods: [
      'Heating',
      'machine',
      'Towels',
      'Heating',
      'Coffee',
      'machine',
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 2,
      isPro: true,
      name: 'Lady'
    },
    id: 2,
    images: [
      'img/apartment-01.jpg',
      'img/apartment-03.jpg',
      'img/apartment-02.jpg',
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.35514938496063,
      longitude: 4.673877537499063,
      zoom: 8
    },
    maxAdults: 2,
    previewImage: 'img/room.jpg',
    price: 80,
    rating: 2,
    title: 'Заголовок объявления mocks 2',
    type: 'Room'
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    description: 'mocks 3',
    goods: [
      'Heating',
      'seat',
      'Kitchen',
      'Dishwasher',
      'Cabel',
      'TV',
      'Fridge'
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 3,
      isPro: true,
      name: 'Angelina'
    },
    id: 3,
    images: [
      'img/apartment-01.jpg',
      'img/studio-01.jpg.jpg',
      'img/apartment-01.jpg',
    ],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 52.35514938496045,
      longitude: 4.673877537499045,
      zoom: 8
    },
    maxAdults: 2,
    previewImage: 'img/apartment-03.jpg',
    price: 80,
    rating: 3,
    title: 'mocks 3',
    type: 'Apartment'
  },
  {
    bedrooms: 5,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Paris'
    },
    description: 'mocks 4',
    goods: [
      'Heating',
      'Wi-Fi',
      'Washing',
      'machine',
      'Kitchen',
      'Dishwasher',
      'Cabel',
      'TV',
      'Fridge'
    ],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 4,
      isPro: true,
      name: 'Max'
    },
    id: 4,
    images: [
      'img/studio-01.jpg.jpg',
      'img/apartment-01.jpg',
    ],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.35514938496012,
      longitude: 4.673877537499012,
      zoom: 8
    },
    maxAdults: 2,
    previewImage: 'img/apartment-02.jpg',
    price: 80,
    rating: 4.5,
    title: 'mocks 4',
    type: 'Apartment'
  }
];
