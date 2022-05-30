export const getOrbit = async (planet) => {
  const response = await fetch(
    `https://api.le-systeme-solaire.net/rest/bodies/${planet}`
  );
  const data = await response.json();

  return data.sideralOrbit / 60000;
};
