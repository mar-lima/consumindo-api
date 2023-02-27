import React, { MouseEventHandler } from "react";
import * as C from "./style";


type Props = {
  name?: string;
  image?: string;
  type?: string;
  status?: string;
  onClick?: MouseEventHandler<HTMLDivElement>
  id?: number
};

const CharacterCard = ({ id, name, image, type, status, onClick }: Props) => {
  return (
    <C.CardItens key={id} onClick={onClick}>
      <h3>{name}</h3>
      <h4>{status}</h4>
      <C.Img src={image} />
      <span>Espécie: {type}</span>
    </C.CardItens>
  );
};

export default CharacterCard;
