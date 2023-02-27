import React, { useState } from "react";
import { Ryck, Specie } from "../../types/Types";
import { api } from "../../helpers/api";
import * as C from "./style";

type Props = {
  pokemonFilter: Function;
};

const Header = ({ pokemonFilter }: Props) => {
  return (
    <>
      <C.Header>
        <div>
          <img
            src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
            alt=""
          />
        </div>
        <div>
          <input
            onChange={(e) => pokemonFilter(e.target.value)}
            type="text"
            placeholder="exp: ditto"
          />
        </div>
      </C.Header>
    </>
  );
};

export default Header;
