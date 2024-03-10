const addSearchBox = () => {
  const searchBox = document.createElement('input');
  searchBox.setAttribute('placeholder', 'City...');
  return searchBox;
};

const addsearchButton = () => {
  const searchButton = document.createElement('button');
  searchButton.textContent = 'Search';
  return searchButton;
};

const cityName = (city) => {
  const container = document.createElement('div');
  const cityN = document.createElement('p');
  cityN.textContent = city;
  container.appendChild(cityN);
  return container;
};

const weatherInfoDiv = (temperature, weatherType) => {
  const container = document.createElement('div');
  const temp = document.createElement('p');
  temp.textContent = temperature;
  const weather = document.createElement('p');
  weather.textContent = weatherType;
  container.appendChild(temp);
  container.appendChild(weather);
  return container;
};

const searchSet = (city, temp, weather) => {
  const container = document.createElement('div');
  container.appendChild(addSearchBox());
  container.appendChild(addsearchButton());
  container.appendChild(cityName(city));
  container.appendChild(weatherInfoDiv(temp, weather));
  document.body.appendChild(container);
};

export default searchSet;
