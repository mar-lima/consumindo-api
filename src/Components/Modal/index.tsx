import React, { MouseEventHandler } from "react";

import * as C from "./style";

type Props = {
  key?: number;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  src?: string;
  name?: string;
  specie?: string;
};

const CardModal = ({ key, onClick, src, name, specie }: Props) => {
  return (
    <C.Container key={key}>
      <C.CardModal>
        <C.ContainerModal>
          <div className="div-btn">
            <button onClick={onClick}>Close</button>
          </div>
          <div className="div-card">
            <img src={src} />
          </div>
          <div className="atributes">
            <div>
              <h4> Nome: {name}</h4>
              <h3>Especie: {specie}</h3>
            </div>
          </div>
        </C.ContainerModal>
      </C.CardModal>
    </C.Container>
  );
};

export default CardModal;
