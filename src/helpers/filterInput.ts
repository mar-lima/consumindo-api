import axios from "axios";
import { api } from "./api";

export const filterInput = {
  filter: async (event: React.ChangeEvent<HTMLSelectElement>) => {
    let json = await api.getAllCharacters();

    var filtred = [];
    for (var i in json) {
      if ((json[i].data.name).toLowerCase().includes(event.target.value)) {
        filtred.push(json[i]);
      }
    }
    var filter = filtred;
    

    return filtred;
  },
};
