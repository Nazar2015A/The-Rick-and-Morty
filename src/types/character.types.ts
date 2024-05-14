import { IconType } from "react-icons";

export type Id = string | number;

export enum Gender {
  Female = "Female",
  Male = "Male",
  unknown = "unknown",
}
export enum Species {
  Human = "Human",
  Alien = "Alien",
  Humanoid = "Humanoid",
  Cronenberg = "Cronenberg",
  Poopybutthole = "Poopybutthole",
  "Mythological Creature" = "Mythological Creature",
  Robot = "Robot",
  Animal = "Animal",
}
export enum Status {
  Dead = "Dead",
  Alive = "Alive",
  unknown = "unknown",
}

export interface Character {
  id: number;
  created: string;
  episode: string[];
  gender: Gender;
  image: string;
  location: {
    name: string;
    url: string;
  };
  name: string;
  origin: {
    name: string;
    url: string;
  };
  species: string;
  status: string;
  type: string;
  url: string;
}

export interface Icons {
  [key: string]: IconType;
}

export interface CharacterResponse {
  info: {
    count: number;
    next: string;
    pages: number;
    prev: null;
  };
  results: Character[];
}
