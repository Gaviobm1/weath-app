const getCurrentWeather = async (location) => {
  const weather = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=e582b20ef61d4ca2837175640240303&q=${location}`,
    {
      mode: 'cors',
    },
  );
  return weather.json();
};

export default getCurrentWeather;
