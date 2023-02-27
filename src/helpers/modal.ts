import axios from "axios";
import { api } from "./api";

export const modal = {
  IdCharacter: async (item: number) => {
    var endpoints = [];
    endpoints.push(`https://rickandmortyapi.com/api/character/${item}`);
    var response = await axios.all(
      endpoints.map((endpoint) => axios.get(endpoint))
    );
    console.log(response)
    return response;
  },
};
