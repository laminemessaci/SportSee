import Meditation from '../assets/meditation.png';
import Swimming from '../assets/swimming.png';
import Cycling from '../assets/cycling.png';
import bodybuilding from '../assets/bodybuilding.png';
import SportSeeLogo from '../assets/logo.svg';

import calorieIcon from '../assets/icon-calorie.png';
import carbohydrateIcon from '../assets/icon-carbohydrate.png';
import lipidIcon from '../assets/icon-lipid.png';
import proteinIcon from '../assets/icon-protein.png';

export const theme = {
  colors: {
    primary500: '#ff0101',
    neutral100: '#fbfbfb',
    neutral200: '#dedede',
    neutral400: '#9b9eac',
    neutral500: '#74798c',
    neutral800: '#2b2d30',
    neutral900: '#020203',
    transparent: 'transparent',
  },
  fonts: {
    small: '0.4rem',
    medium: '0.8rem',
    large: '1.5rem',
  },
};

export const icons = {
  bodybuilding,
  Cycling,
  Meditation,
  Swimming,
  SportSeeLogo,
};

export const icons_type_infos = {
  Calories: calorieIcon,
  Glucides: carbohydrateIcon,
  Protéines: proteinIcon,
  Lipides: lipidIcon,
};

export const icons_unit_infos = {
  Calories: 'kCal',
  Glucides: 'g',
  Protéines: 'g',
  Lipides: 'g',
};

export const activitie_radar = {
  1: 'Intensité',
  2: 'Vitesse',
  3: 'Force',
  4: 'Endurance',
  5: 'Energie',
  6: 'Cardio',
};

export const user_message =
  'Félicitations ! Vous avez explosé vos objectifs hier ! 👏';

export const BASE_URL = 'http://localhost:3000/user/';

export const END_POINTS = (id) => {
  return [
    `${BASE_URL}${id}`,
    `${BASE_URL}${id}/activity`,
    `${BASE_URL}${id}/average-sessions`,
    `${BASE_URL}${id}/performance`,
  ];
};
