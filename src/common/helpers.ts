export const plantsTitles: string[] = [
  'Plants purify the air by absorbing toxins',
  'Flowers beautify spaces and bring joy',
  'Gardening reduces stress and anxiety',
  'Plants enhance concentration and productivity',
  'The presence of vegetation reduces urban heat islands',
  'Plants improve air humidity, beneficial for the skin',
  'Certain flowers attract pollinators, essential for ecosystems',
  'Indoor plants filter electromagnetic waves',
  'Growing edible plants ensures local and healthy food',
  'Plants and flowers create habitats for wildlife, enriching biodiversity'
];

export const Logout = 'Logout';
export const MyCrops = 'My crops';
export const Profile = 'Profile';
export const Plants = 'plants';
export const AboutUs = 'About us';
export const navPages = [MyCrops, Plants, AboutUs];
export const userSettings = [Profile, MyCrops, Logout];


const Sunlight = {
  FullSun: 'full sun',
  PartShade: 'part shade',
  FullShade: 'full_shade', SunPartShade: 'sun-part_shade'
};

export const renderSunCondition = (conditions: string[]) => {
  if (conditions.includes(Sunlight.FullSun)) {
    return {
      src: '/sunny.svg',
      alt: Sunlight.FullSun,
      description: 'Give your plant some sunny love, and watch it thrive!'
    };
  } else if (conditions.includes(Sunlight.SunPartShade)) {
    return {
      src: '/part-sunny.svg',
      alt: Sunlight.SunPartShade,
      description: 'Your plant enjoys a mix of sun and shade to stay happy and healthy!'
    };
  } else if (conditions.includes(Sunlight.PartShade)) {
    return {
      src: '/part-shade.svg',
      alt: Sunlight.PartShade,
      description: 'Give your plant a mix of sun and shade, and it will be one happy camper!'
    };
  } else if (conditions.includes(Sunlight.FullShade)) {
    return {
      src: '/full-shade.svg',
      alt: Sunlight.FullShade,
      description: 'Keep your plant happy by giving it a cozy, shady spot to chill!'
    };
  } else {
    return {
      src: '',
      alt: '',
      description: ''
    };
  }
};