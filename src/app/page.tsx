import HeroSection from '@/components/hero';
import { TwoColumns } from '../layouts/blocks/TwoColumns';
import { FindMyPlantButton } from './page.buttons';
import { CropsListBlock } from './crops/List';
import { HeroSectionBlockSearch } from '@/components/hero/Search';
import { Footer } from '@/components/navigation/footer/Footer';

export default function Page() {
  return <>
    <HeroSection searchNode={
      <HeroSectionBlockSearch />
    } />
    {/* TODO : the div below must become a template for all pages*/}
    {/*in order to have homogenous padding*/}
    <CropsListBlock displayError={false} />
    <TwoColumns className="my-20" title="Outdoor? Indoor? Pick your plants accordingly"
                description={'Choosing the right plant for your space is essential for both its growth and\n' +
                  '          visual\n' +
                  '          appeal. Whether you\'re enhancing the ambiance of your indoor space or adding vibrance to your outdoor\n' +
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
    <TwoColumns className="my-20" title="Help Your Crop Thrive with Expert Blooming Tips"
                description={'To encourage your crops to flower, start by ensuring they get enough sunlight, as most flowering plants require ample light. Use a phosphorus-rich fertilizer to boost blooming, and avoid overwatering, which can stress plants. Regular pruning improves airflow and directs energy toward budding flowers. Keep an eye out for pests or diseases that may delay flowering. With these simple adjustments, your crop will be on its way to producing vibrant blooms.'}
                src="/watering-couple-indoor-block2.jpg" alt="watering couple indoor block2"
                Cta={
                  <FindMyPlantButton />
                }
                imageDisplay="right"
    />
    <Footer />
  </>;
}