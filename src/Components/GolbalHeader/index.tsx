import { all } from "axios";
import React, {
  DetailedHTMLProps,
  OptionHTMLAttributes,
  useEffect,
  useState,
} from "react";
import { Ryck, Specie } from "../../types/Types";
import { api } from "../../helpers/api";
import * as C from "./style";

type Props = {
  onchange?: React.ChangeEventHandler<HTMLSelectElement>;
  inputFilter: Function;
  // All: Ryck[]
  All: string;
};

const GolbalHeader = ({ onchange, inputFilter, All }: Props) => {
  const [allCharactres, setAllCharactres] = useState<Ryck[]>([]);
  const [selectSpecie, setselectSpecie] = useState<Specie[]>([]);

  useEffect(() => {
    loadCharacter();
  }, []);

  const loadCharacter = async () => {
    let json = await api.getAllCharacters();
    setAllCharactres(json);

    // 1- filtrar para o select
    const especieunica = new Map();
    //função para mapear filtrar por categoria usando as especies como base
    json.forEach((especie) => {
      if (!especieunica.has(especie.data.species)) {
        especieunica.set(especie.data.species, especie.data.species);
      }
    });
    var list = [];
    list = [...especieunica];
    setselectSpecie(list);
  };

  return (
    <>
      <C.Header>
        {/* <div>
        <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="" />
      </div> */}
        <select onChange={onchange}>
          <option value={`${All}`}>---</option>
          {selectSpecie.map((item, index) => (
            <option value={item[0]} key={item[0]}>
              {item[0]}
            </option>
          ))}
        </select>
        <input
          placeholder="Exp: Morty Smith"
          onChange={(e) => inputFilter(e)}
        />
      </C.Header>
    </>
  );
};

export default GolbalHeader;
