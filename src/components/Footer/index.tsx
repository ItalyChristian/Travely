import useWindowSize from '../../hooks/useWindowSize';

import Desktop from './components/Desktop';
import Mobile from './components/Mobile';

const DinamicalCards: React.FC = () => {
  const { width } = useWindowSize();

  const isMobileSize = !!width && width <= 768;

  return isMobileSize ? <Mobile /> : <Desktop />
}

export default DinamicalCards;