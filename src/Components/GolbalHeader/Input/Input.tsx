import React from "react";

type Props = {
  onchange: Function;
};

const Input = ({ onchange }: Props) => {
  return (
    <>
      <div>
        <input
          onChange={(e) => onchange(e)}
          type="text"
          placeholder="exp: ditto"
        />
      </div>
    </>
  );
};

export default Input;
