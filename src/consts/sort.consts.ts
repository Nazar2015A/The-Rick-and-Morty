import { Gender, Species, Status } from "../types/character.types";

const speciesValues = Object.values(Species) as string[];
const genderValues = Object.values(Gender) as string[];
const statusValues = Object.values(Status) as string[];

export const SPECIES_OPTIONS = [
  { value: "", label: "All Species" },
  ...speciesValues.map((species) => ({ value: species, label: species })),
];
export const GENDER_OPTIONS = [
  { value: "", label: "All Genders" },
  ...genderValues.map((gender) => ({ value: gender, label: gender })),
];
export const STATUS_OPTIONS = [
  { value: "", label: "All Statuses" },
  ...statusValues.map((status) => ({ value: status, label: status })),
];
