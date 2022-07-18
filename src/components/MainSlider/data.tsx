import Wallpaper1 from 'assets/images/wallpaper.jpg';
import Wallpaper2 from 'assets/images/wallpaper2.jpg';

interface SliderElement {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const sliderData: SliderElement[] = [
  {
    id: 'image-00',
    title:'EXPLORE THE WORLD WITH US',
    description: ' Wellness for your body and mind. Our team has been working throughout for 20 years. We hove counted hundreds of travels and thousands of satisfied costumers.',
    image: Wallpaper1.src
  },
  {
    id: 'image-01',
    title:'EXPLORE THE WORLD WITH US',
    description: ' Wellness for your body and mind. Our team has been working throughout for 20 years. We hove counted hundreds of travels and thousands of satisfied costumers.',
    image: Wallpaper2.src
  },
];
