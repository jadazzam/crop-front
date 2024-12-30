import HeroSection from '@/components/hero';
import { TwoColumns } from '../layouts/blocks/TwoColumns';
import { FindMyPlantButton } from './page.buttons';
import { CropsListBlock } from './crops/List';
import { HeroSectionBlockSearch } from '@/components/hero/Search';
import { HeroSectionBlockButton } from '@/components/hero/Button';

export default function Page() {
  return <>
    <HeroSection searchNode={
      <HeroSectionBlockSearch />
    } buttonNode={
      <HeroSectionBlockButton />
    } />
    {/* TODO : the div below must become a template for all pages*/}
    {/*in order to have homogenous padding*/}
    <CropsListBlock />
    <TwoColumns title="Outdoor ? Indoor ? Pick your plants accordingly"
                description={'Choosing the right plant for your space is essential for both its growth and\n' +
                  '          visual\n' +
                  '          appeal. Whether you&apos;re enhancing the ambiance of your indoor space or adding vibrance to your outdoor\n' +
                  '          garden, selecting the right plants can make all the difference.\n' +
                  '\n' +
                  '          Save your crop offers expert guidance to help you choose plants that thrive in your specific\n' +
                  '          environment. ' +
                  'Whether indoors or outdoors, we provide tailored solutions to create a green, vibrant\n' +
                  '          environment that suits your lifestyle and enhances your well-being.'}
                src="/watering-couple-indoor.jpg" alt="watering couple indoor"
                Cta={
                  <FindMyPlantButton />
                }
                imageDisplay="left"
    />
  </>;
}