const BASE_URL = "https://challenge.structrs.com";

const getColors = () => {
  return fetch(`${BASE_URL}/rest/colors/list`)
    .then((res) => res.json())
    .catch((error) => {
      throw error;
    });
};

const getExtendedColors = () => {
  return fetch(`${BASE_URL}/rest/colors/list-extended`)
    .then((res) => res.json())
    .catch((error) => {
      throw error;
    });
};

export { getColors, getExtendedColors };
