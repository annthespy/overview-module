import axios from "axios";

function getCurrentProductInfo(apiIP, productId) {
  return axios
    .get(`${apiIP}/products/${productId}`)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => console.error(err));
}

export default getCurrentProductInfo;
