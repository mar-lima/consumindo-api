import React, { useEffect, useState } from "react";
import * as C from "./App.styles";
import Header from "./Components/Header/Header";
import Pokedex from "./Components/Pokemons";
import { api } from "./Components/Pokemons/api";
import RickAndMorty from "./Components/RickApi";

const App = () => {
  return (
    <>
      <C.Container>
        <RickAndMorty />
        {/* <Pokedex /> */}
      </C.Container>
    </>
  );
};

export default App;
