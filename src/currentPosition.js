const place = (pos) => {
  const crd = pos.coords;
  return `${crd.latitude},${crd.longitude}`;
};

const currentPosition = () => navigator.geolocation.getCurrentPosition(place);

export default currentPosition;
