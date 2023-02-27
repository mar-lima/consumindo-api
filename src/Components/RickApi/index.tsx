import React, { useEffect, useState } from "react";
import { Ryck, Specie } from "../../types/Types";
import CharacterCard from "../CharacterCard/CharacterCard";
import GolbalHeader from "../GolbalHeader";
import { api } from "../../helpers/api";
import { filterInput } from "../../helpers/filterInput";
import * as C from "./style";
import CardModal from "../Modal";
import { modal } from "../../helpers/modal";

const RickAndMorty = () => {
  useEffect(() => {
    loadCharacter();
  }, []);

  const [personNames, setPersonNames] = useState<Ryck[]>([]);
  const [allCharactres, setAllCharactres] = useState<Ryck[]>([]);
  const [modalId, setModalId] = useState<Ryck[]>([]);
  const [allspecies, setAllSpecies] = useState<boolean>(true);
  const [ModalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectSpecie, setselectSpecie] = useState<Specie[]>([]);
  const [specie, setSpecie] = useState("Human");
  // const [id, setId] = useState<Specie[]>([]);

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

  // filtrar pesquisa dos inputs
  const specieFilter = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSpecie(event.target.value);
    var man = [];
    if (specie) {
      setAllSpecies(false);
      man = await api.filterSpecies(event.target.value);
      setPersonNames(man);
    } else {
      man = await api.filterSpecies(event.target.value);
      setPersonNames(man);
    }
    // console.log(event.target.value);
    console.log(man);
  };

  const filtername = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    let fill = await filterInput.filter(event);

    if (allspecies) {
      setAllCharactres(fill);
      console.log(fill);
      console.log("fill");
    }
    if (!allspecies) {
      setPersonNames(fill);
    }
  };
  // funçoes do modal
  const openModal = async (item: number) => {
    let json = await modal.IdCharacter(item).then((res) => setModalId(res));
    setModalIsOpen(true);
    // console.log(modalId);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <C.Container>
      <GolbalHeader
        onchange={specieFilter}
        inputFilter={filtername}
        All={"Human"}
      />

      <C.Container>
        {allspecies &&
          allCharactres.map((item) => (
            <div key={item.data.id}>
              <C.Card onClick={() => openModal(item.data.id)}>
                <CharacterCard
                  // onClick={openModal}
                  name={item.data.name}
                  status={`Status: ${item.data.status}`}
                  image={item.data.image}
                  type={item.data.species}
                />
              </C.Card>
            </div>
          ))}

        {!allspecies &&
          personNames.map((item) => (
            <div key={item.data.id}>
              <C.Card onClick={() => openModal(item.data.id)}>
                <CharacterCard
                  // onClick={openModal}
                  name={item.data.name}
                  status={`Status: ${item.data.status}`}
                  image={item.data.image}
                  type={item.data.species}
                />
                {/* <div>{console.log(personNames)}</div> */}
              </C.Card>
              {/* {ModalIsOpen ? (
                <>
                  {modalId.map((item) => console.log(item.data.id))}
                  <CardModal name={item.data.name} onClick={closeModal} />
                </>
              ) : null} */}
            </div>
          ))}

        {ModalIsOpen ? (
          <>
            {modalId.map((item) => (
              <div key={item.data.id}>
                <CardModal
                  // key={item.data.id}
                  onClick={closeModal}
                  src={item.data.image}
                  name={item.data.name}
                  specie={item.data.species}
                />
              </div>
            ))}
          </>
        ) : null}
      </C.Container>
    </C.Container>
  );
};

export default RickAndMorty;
