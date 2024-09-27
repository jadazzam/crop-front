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

const cropsTitles: string[] = [
  'Growing them provides a source of fresh, nutritious food',
  'Working with them encourages physical activity and outdoor time',
  'Caring for them fosters a sense of responsibility and accomplishment',
  'Harvesting your own food can reduce stress and increase happiness',
  'They improve self-sufficiency and reduce dependency on store-bought goods',
  'Gardening with them connects you to nature and the seasons',
  'Growing your own food promotes healthier eating habits',
  'Tending to them can be a therapeutic and meditative practice',
  'They encourage sustainable living and environmental stewardship',
  'Sharing homegrown produce strengthens community bonds'
];
export const cropsTitle = cropsTitles[Math.floor(Math.random() * cropsTitles.length)];

export const Logout = 'Logout';
export const MyCrops = 'My crops';
export const Crops = 'Crops';
export const Home = 'Home';
export const Profile = 'Profile';
export const Plants = 'plants';
export const AboutUs = 'About us';
export const navPages = [MyCrops, Plants, AboutUs];
export const userSettings = [Profile, MyCrops, Logout];
export const ManyPlants = 'yard';
export const OnePlant = 'plant';
export const HomeIcon = 'home';

const Sunlight = {
  FullSun: 'full sun',
  PartShade: 'part shade',
  FullShade: 'full_shade', SunPartShade: 'sun-part_shade'
};

export const renderSunCondition = (conditions?: string[]) => {
  if (conditions?.includes(Sunlight.FullSun)) {
    return {
      src: '/sunny.svg',
      alt: Sunlight.FullSun,
      description: 'Give your plant some sunny love, and watch it thrive!'
    };
  } else if (conditions?.includes(Sunlight.SunPartShade)) {
    return {
      src: '/part-sunny.svg',
      alt: Sunlight.SunPartShade,
      description: 'Your plant enjoys a mix of sun and shade to stay happy and healthy!'
    };
  } else if (conditions?.includes(Sunlight.PartShade)) {
    return {
      src: '/part-shade.svg',
      alt: Sunlight.PartShade,
      description: 'Give your plant a mix of sun and shade, and it will be one happy camper!'
    };
  } else if (conditions?.includes(Sunlight.FullShade)) {
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

export const renderWatering = (watering: string) => {
  switch (watering) {
    case 'Minimum':
      return {
        src: '/water-min.svg',
        alt: 'Water minimum',
        description: 'Think of it as the camel of the plant world; a little water goes a long way!'
      };
    case 'Average':
      return {
        src: '/water-average.svg',
        alt: 'Water average',
        description: 'Water it like Goldilocks: not too dry, not too wet, but just right!'
      };
    case 'Frequent':
      return {
        src: '/water-frequent.svg',
        alt: 'Water frequent',
        description: 'Think of this plant as always thirsty – it\'s your own little waterholic!'
      };
    case 'None':
      return {
        src: '/water-none.svg',
        alt: 'Water none',
        description: 'This plant is on a water-free diet – no H2O needed!'
      };
    default:
      return {
        src: '/water-frequent.svg',
        alt: 'Water frequent',
        description: 'Think of this plant as always thirsty – it\'s your own little waterholic!'
      };
  }

};