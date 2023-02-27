export type Types = {
  i?: number;
  null?: null;
  data: {
    id: number;
    name?: string;
    sprites?: {
      versions: {
        ["generation-v"]: {
          ["black-white"]: {
            animated: {
              front_default: string;
            };
          };
        };
      };
      other: {
        dream_world: { front_default: string };
      };
    };

    types?: { 0: { type: { name: string } } };
  };

  url?: string;
};

export type Ryck = {
  0?: string;
  data: {
    name?: string;
    id: number;
    image?: string;
    species?: string;
    status?: string;
  };
};

export type Species = {
  mythological?: "Mythological Creature";
  human?: "Human";
  alien?: "Alien";
};

export type Specie = {
  0: string | number
};
