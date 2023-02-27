import axios from "axios";

export const api = {
  getAllPokes: async () => {
    var endpoints = [];

    for (var i = 1; i < 50; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
    }
    var response = axios.all(endpoints.map((endpoint) => axios.get(endpoint)));

    return response;
  },
  onePke: async (item: number) => {
    var endpoints = [];
    endpoints.push(`https://pokeapi.co/api/v2/pokemon/${item}`);
    var response = await axios.all(
      endpoints.map((endpoint) => axios.get(endpoint))
    );

    console.log(endpoints);
    return response;
  },
};
