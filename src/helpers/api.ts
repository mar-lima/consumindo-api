import axios from "axios";
import { Ryck, Species, Types } from "../types/Types";

export const api = {
  getAllCharacters: async () => {
    var endpoints = [];

    for (var i = 1; i < 50 + 1; i++) {
      endpoints.push(`https://rickandmortyapi.com/api/character/${i}`);
    }
    var response = axios.all(endpoints.map((endpoint) => axios.get(endpoint)));

    return response;
  },

  filterSpecies: async (specie?: string) => {
    let json = await api.getAllCharacters();

    const filtred = json.filter((item) => {
      return item.data.species === specie;
    });
    // ((item: string)=> (item))

    return filtred;
  },
};
