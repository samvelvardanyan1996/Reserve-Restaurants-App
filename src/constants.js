import { Dimensions } from 'react-native';
import { Image } from "react-native";

export const windowWidth  = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

export const logoImage       = require('./image/preloader.jpg');
export const backgroundImage = require('./image/preloader.jpg');
export const sourceWidth     = 360;
export const sourceHeight    = 202;

// export const sourceWidth     = Image.resolveAssetSource(backgroundImage).width;
// export const sourceHeight    = Image.resolveAssetSource(backgroundImage).height;

export const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bd',
    title: 'Sherep Restaurant',
    description: "1 Amiryan St.",
    image: '../image/preloader.jpg',
    tables: [
      {
        id: 'bd7acbea-c1b5-16c2-aed5-3ad53abb28bd',
        description: "Lorem Ipsum",
        image: '../image/preloader.jpg',
        food: "Wasabi Sushi",
        reserveTable: "Wasabi Sushi",
      },
      {
        id: 'bd8acbea-c1b5-46c2-aed5-3ad53abb28bd',
        description: "Lorem Ipsum",
        image: '../image/preloader.jpg',
        food: "Samurai Sushi",
        reserveTable: "Samurai Sushi",
      }
    ]
  },
  {
    id: '3ac68afc-c605-48f3-a4f8-fbd91aa97f63',
    title: 'Lavash Restaurant',
    description: "36 Tumanyan St.",
    image: '../image/preloader.jpg',
    tables: [{
      id: 'bd7acbea-c1b5-46c2-aed5-3ad54abb28bd',
      description: "Lorem Ipsum",
      image: '../image/preloader.jpg',
      food: "1",
      reserveTable: "1",
    }]
  },
  {
    id: '58694a0f-3da1-47fa-bd96-145571e29d72',
    title: 'Lavash Restaurant',
    description: "36 Tumanyan St.",
    image: '../image/preloader.jpg',
    tables: [{
      id: 'bd7acbea-c1b5-46c2-aed5-3ad53abb28bd',
      description: "Lorem Ipsum",
      image: '../image/preloader.jpg',
      food: "1",
      reserveTable: "1",
    }]
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Sherep Restaurant',
    description: "1 Khorenatsi St.",
    image: '../image/preloader.jpg',
    tables: [{
      id: 'bd7acbea-c1b5-46c2-asd5-3ad53abb28bd',
      description: "Lorem Ipsum",
      image: '../image/preloader.jpg',
      food: "1",
      reserveTable: "1",
    }]
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'El Garden',
    description: "36 Tumanyan St.",
    image: '../image/preloader.jpg',
    tables: [{
      id: '3d7acbea-c1b5-46c2-aed5-3ad53abb28bd',
      description: "Lorem Ipsum",
      image: '../image/preloader.jpg',
      food: "1",
      reserveTable: "1",
    }]
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Garun',
    description: "1 Khorenatsi St.",
    image: '../image/preloader.jpg',
    tables: [{
      id: 'bd7acbea-c1b5-46c2-add5-3ad53abb28bd',
      description: "Lorem Ipsum",
      image: '../image/preloader.jpg',
      food: "1",
      reserveTable: "1",
    }]
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bo',
    title: 'Amar',
    description: "36 Tumanyan St.",
    image: '../image/preloader.jpg',
    tables: [{
      id: 'bd7acbea-c1b5-46c2-aed5-3ad53abb28bo',
      description: "Lorem Ipsum",
      image: '../image/preloader.jpg',
      food: "1",
      reserveTable: "1",
    }]
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f67',
    title: 'Ashun',
    description: "1 Khorenatsi St.",
    image: '../image/preloader.jpg',
    tables: [{
      id: 'bd7acbea-c1b5-46c2-aed5-3ad53abb28b7',
      description: "Lorem Ipsum",
      image: '../image/preloader.jpg',
      food: "1",
      reserveTable: "1",
    }]
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d79',
    title: 'Dzmer',
    description: "36 Tumanyan St.",
    image: '../image/preloader.jpg',
    tables: [{
      id: '5d7acbea-c1b5-46c2-aed5-3ad53abb28bd',
      description: "Lorem Ipsum",
      image: '../image/preloader.jpg',
      food: "1",
      reserveTable: "1",
    }]
  },
];