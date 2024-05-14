import { PiAlienFill } from "react-icons/pi";
import {
  FaPerson,
  FaCircleQuestion,
  FaDisease,
  FaDog,
  FaRobot,
} from "react-icons/fa6";
import {
  FaHeart,
  FaGenderless,
  FaFemale,
  FaMale,
  FaOptinMonster,
} from "react-icons/fa";
import {
  GiMonoWheelRobot,
  GiArmouredShell,
  GiBanana,
  GiDeathSkull,
} from "react-icons/gi";
import { Icons } from "../types/character.types";

export const characterSpecies: Icons = {
  Human: FaPerson,
  Alien: PiAlienFill,
  Humanoid: FaRobot,
  "Mythological Creature": GiArmouredShell,
  Poopybutthole: GiBanana,
  unknown: FaCircleQuestion,
  Robot: GiMonoWheelRobot,
  Animal: FaDog,
  Cronenberg: FaOptinMonster,
  Disease: FaDisease,
} as const;
export const characterStatus: Icons = {
  Dead: GiDeathSkull,
  Alive: FaHeart,
  unknown: FaCircleQuestion,
} as const;

export const characterGender: Icons = {
  Female: FaFemale,
  Male: FaMale,
  Genderless: FaGenderless,
  unknown: FaCircleQuestion,
};
