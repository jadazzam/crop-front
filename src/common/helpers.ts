import InfoIcon from '@mui/icons-material/Info';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import { ListItemProps } from '@/components/menu/MenuBurger';
import { capitalize } from '@mui/material';

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
export const Home = 'Home';
export const Profile = 'Profile';
export const navbarItems: ListItemProps[] = [
  {
    title: 'My crops',
    link: '/crops',
    IconSvg: LocalFloristIcon
  }, {
    title: 'Plants',
    link: '/plants',
    IconSvg: ShoppingCartCheckoutIcon
  }, {
    title: 'About Us',
    link: '/about',
    IconSvg: InfoIcon
  }];
export const loginItem: ListItemProps = { title: 'Sign in', link: '/api/auth/login', IconSvg: LoginIcon };
export const logoutItem: ListItemProps = { title: 'Sign out', link: '/api/auth/logout', IconSvg: LogoutIcon };
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
      src: '/part-shade.svg',
      alt: Sunlight.PartShade,
      description: 'Give your plant a mix of sun and shade, and it will be one happy camper!'
    };
  }
};
export const renderWatering = (watering: string) => {
  switch (watering) {
    case 'Minimum':
      return {
        src: '/water-min.png',
        alt: 'Water minimum',
        description: 'Think of it as the camel of the plant world; a little water goes a long way!'
      };
    case 'Average':
      return {
        src: '/water-average.png',
        alt: 'Water average',
        description: 'Water it like Goldilocks: not too dry, not too wet, but just right!'
      };
    case 'Frequent':
      return {
        src: '/water-frequent.png',
        alt: 'Water frequent',
        description: 'Think of this plant as always thirsty – it\'s your own little waterholic!'
      };
    case 'None':
      return {
        src: '/water-none.png',
        alt: 'Water none',
        description: 'This plant is on a water-free diet – no H2O needed!'
      };
    default:
      return {
        src: '/water-frequent.png',
        alt: 'Water frequent',
        description: 'Think of this plant as always thirsty – it\'s your own little waterholic!'
      };
  }

};


type descriptionOptionsProps = {
  common_name: string,
  scientific_name: string[],
  cycle: string,
  sunlight: string[],
  watering: string,
  other_name: string[],
}
export const descriptionOptions = ({
                                     common_name,
                                     scientific_name,
                                     cycle,
                                     sunlight,
                                     watering,
                                     other_name
                                   }: descriptionOptionsProps): string => {
  const formatArray = (arr: string[] | undefined) => {
    if (!arr || !arr.length) return '';
    return arr.map((item) => capitalize(item)).join(', ');
  };

  const templates: string[] = [
    `Explore the beauty of the ${common_name} (${formatArray(scientific_name)}), a charming ${cycle.toLowerCase()} that flourishes in ${Array.isArray(sunlight) && sunlight?.length ? sunlight.join(', ').toLowerCase() : 'varied light conditions'}. ${other_name?.length ? `Also known as ${formatArray(other_name)}, it` : 'It'} thrives with ${watering.toLowerCase()} watering and showcases stunning flowers that attract pollinators to your garden.`,
    `Meet the delightful ${common_name} (${formatArray(scientific_name)}), an elegant ${cycle.toLowerCase()} perfect for gardens with ${Array.isArray(sunlight) && sunlight?.length ? sunlight.join(', ').toLowerCase() : 'all light levels'}. ${other_name?.length ? `Often called ${formatArray(other_name)}, it` : 'It'} demands ${watering.toLowerCase()} watering and adds vibrant color to any outdoor space.`,
    `Introducing the ${common_name} (${formatArray(scientific_name)}), a graceful ${cycle.toLowerCase()} that thrives in ${Array.isArray(sunlight) && sunlight?.length ? sunlight.join(', ').toLowerCase() : 'suitable light conditions'}. ${other_name?.length ? `Commonly referred to as ${formatArray(other_name)}, this plant` : 'This plant'} enjoys ${watering.toLowerCase()} watering and delights pollinators with its captivating blossoms.`,
    `Say hello to the stunning ${common_name} (${formatArray(scientific_name)}), a resilient ${cycle.toLowerCase()} that loves ${Array.isArray(sunlight) && sunlight?.length ? sunlight.join(', ').toLowerCase() : 'ample light'}. ${other_name?.length ? `Nicknamed ${formatArray(other_name)}, it` : 'It'} flourishes with ${watering.toLowerCase()} watering and makes a statement with its breathtaking flowers.`,
    `Discover the ${common_name} (${formatArray(scientific_name)}), an enchanting ${cycle.toLowerCase()} that prospers under ${Array.isArray(sunlight) && sunlight?.length ? sunlight.join(', ').toLowerCase() : 'ideal light conditions'}. ${other_name?.length ? `Known as ${formatArray(other_name)}, it` : 'It'} requires ${watering.toLowerCase()} watering and is a favorite among pollinators for its lovely blooms.`
  ];

  const randomIndex = Math.floor(Math.random() * templates.length);
  return templates[randomIndex];
};

type socialOptionsProps = {
  [key: string]: {
    [key: string]: string
  }
}
export const socialsOptions: socialOptionsProps = {
  instagram: {
    src: 'socials/instagram.svg',
    href: 'https://www.instagram.com/savemycrop',
    alt: 'social-instagram'
  }, facebook: {
    src: 'socials/facebook.svg',
    href: 'https://www.facebook.com/savemycrop',
    alt: 'social-facebook'
  }, x: {
    src: 'socials/x.svg',
    href: 'https://www.x.com/savemycrop',
    alt: 'social-x'
  }
};