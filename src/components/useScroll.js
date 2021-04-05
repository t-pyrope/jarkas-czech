import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

const useScroll = () => {
  const [element, view] = useInView({ threshold: 0.3 });
  const controls = useAnimation();
  if (view) {
    controls.start('show');
  } else {
    controls.start('hidden');
  }
  return [element, controls];
};

export default useScroll;
