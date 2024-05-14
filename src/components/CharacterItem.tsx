import React, { FC } from "react";
import { createPortal } from "react-dom";
import { Character, Gender } from "../types/character.types";
import {
  characterGender,
  characterSpecies,
  characterStatus,
} from "../consts/icons.consts";
import { useModal } from "../hooks/useModal";
import ModalDetails from "./ModalDetails";
import { cn } from "../utils/cn";

interface Props {
  character: Character;
}
const CharacterItem: FC<Props> = ({ character }) => {
  const { isModal, openModal, closeModal } = useModal();
  return (
    <div className="rounded-md shadow-sm border border-gray-300 p-6 flex flex-col">
      <div className="flex flex-col mt-2 justify-center items-center gap-2 min-h-[100px] mb-8">
        <img
          loading="lazy"
          src={character.image}
          alt={character.name}
          className="w-24 h-24 object-contain rounded-full"
        />
        <h2 className="text-center font-semibold text-lg">{character.name}</h2>
      </div>
      <div className="flex flex-col justify-start gap-2">
        <p className="font-medium">
          Gender:{" "}
          <span
            className={cn(
              "font-normal",
              character.gender === Gender.Male
                ? "text-blue-500"
                : "text-pink-500"
            )}
          >
            {character.gender}
          </span>
          {React.createElement(characterGender[character.gender], {
            className:
              "w-5 h-5 inline-block ml-2 transition-transform duration-300 transform hover:scale-110",
          })}
        </p>
        <p className="font-medium">
          Species:{" "}
          <span className="font-normal text-green-500">
            {character.species}
          </span>
          {React.createElement(characterSpecies[character.species], {
            className:
              "w-5 h-5 inline-block ml-2 transition-transform duration-300 transform hover:scale-110",
          })}
        </p>
        <p className="font-medium">
          Status:{" "}
          <span className="font-normal text-yellow-500">
            {character.status}
          </span>
          {React.createElement(characterStatus[character.status], {
            className:
              "w-5 h-5 inline-block ml-2 transition-transform duration-300 transform hover:scale-110",
          })}
        </p>
      </div>
      <div>
        <button
          onClick={openModal}
          className="bg-black rounded-md flex justify-center items-center mt-8 px-4 py-2 text-white w-full text-sm font-medium hover:bg-black/85 transition-colors"
        >
          Details
        </button>
      </div>
      {isModal
        ? createPortal(
            <ModalDetails
              isModal={isModal}
              character={character}
              closeModal={closeModal}
            />,
            document.body
          )
        : null}
    </div>
  );
};

export default CharacterItem;
