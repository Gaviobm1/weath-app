import getCurrentWeather from './apirequest';
import searchSet from './htmlelements';

const weatherInfo = async (city) => {
  const weather = await getCurrentWeather(city);
  searchSet(weather.location.name, weather.current.temp_c, weather.current.condition.text);
  const button = document.querySelector('button');
  button.addEventListener('click', () => {
    const input = document.querySelector('input');
    weatherInfo(input.value);
    const div = document.querySelector('div');
    document.body.removeChild(div);
  });
};

export default weatherInfo;
