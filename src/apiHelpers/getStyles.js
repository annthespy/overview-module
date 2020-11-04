import axios from "axios";

function getStyles(apiIP, productId) {
  return axios
    .get(`${apiIP}/products/${productId}/styles`)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => console.error(err));
}

export default getStyles;
