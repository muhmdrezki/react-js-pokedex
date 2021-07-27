let domain = process.env.REACT_APP_API_DOMAIN;

const apiEndpoints = {
  pokemon: {
    getEndpointList: domain + "pokemon",
  },
};

export default apiEndpoints;
