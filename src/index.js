import weatherInfo from './interface';
import currentPosition from './currentPosition';

window.addEventListener('load', () => {
  const location = currentPosition();
  weatherInfo(location);
});
