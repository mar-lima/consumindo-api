import { Types } from "../../types/Types";
import React, { useEffect, useState } from "react";
import CharacterCard from "../CharacterCard/CharacterCard";
import * as C from "./style";
import { api } from "./api";
import Header from "../Header/Header";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState<Types[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData] = useState<number>();
  const [pokeModal, serPokeModal] = useState<Types[]>([]);

  useEffect(() => {
    loadPokedex();
  }, []);

  const loadPokedex = async () => {
    let json = await api.getAllPokes();
    setPokemons(json);
    console.clear;
    // console.log(json);
  };
  const pokemonFilter = async (name: string) => {
    let json = await api.getAllPokes();

    var filtred = [];
    for (var i in json) {
      if (json[i].data.name.includes(name)) {
        filtred.push(json[i]);
      }
    }
    setPokemons(filtred);
  };

  const openModal = async (item: number) => {
    let json = await api.onePke(item).then((res) => serPokeModal(res));
    setModalIsOpen(true);
    // console.log(json)
    
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div onClick={closeModal}>
      <Header pokemonFilter={pokemonFilter} />
      <div>Total de pokemons:: {pokemons.length}</div>
      <C.Container>
        {pokemons.map((item) => (
          <div key={item.data?.id}>
            <C.Card
              key={item.data?.id}
              onClick={() => openModal(item.data?.id)}>
              <CharacterCard
                name={item.data?.name}
                image={`${item.data?.sprites?.other.dream_world.front_default}`}
                type={item.data?.types?.[0].type.name}

              />
             
            </C.Card>
          </div>
        ))}
        {modalIsOpen ? (
          <C.Card key={modalData}>
            {pokeModal.map((item) => (
              <C.CardModal key={item.data?.id}>
                <C.ContainerModal>
                  <div className="div-btn">
                    <button onClick={closeModal}>Close</button>
                  </div>
                  <div className="div-card">
                    <img
                      src={item.data.sprites?.other.dream_world.front_default}
                    />
                  </div>
                  <div className="atributes">
                    <div>
                      <h2> Nome: {item.data?.name}</h2>
                      <h3>Tipo: {item.data?.types?.[0].type.name}</h3>
                    </div>
                    <div>
                      <img
                        src={
                          item.data.sprites?.versions["generation-v"][
                            "black-white"
                          ].animated.front_default
                        }
                        alt=""
                      />
                    </div>
                  </div>
                </C.ContainerModal>
              </C.CardModal>
            ))}
          </C.Card>
        ) : null}
      </C.Container>
    </div>
  );
};

export default Pokedex;
