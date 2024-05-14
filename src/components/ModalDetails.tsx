import React, { FC } from "react";
import Modal from "react-modal";
import { IoClose } from "react-icons/io5";
import { formatDate, parseISO } from "date-fns";
import { FaSearchLocation } from "react-icons/fa";
import {
  characterGender,
  characterSpecies,
  characterStatus,
} from "../consts/icons.consts";
import { Character, Gender } from "../types/character.types";
import EpisodeItem from "./EpisodeItem";
import Separator from "./ui/Separator";
import useGetEpisodes from "../hooks/useGetAllEpisodes";
import { cn } from "../utils/cn";

interface Props {
  isModal: boolean;
  character: Character;
  closeModal: () => void;
}

const ModalDetails: FC<Props> = ({ isModal, character, closeModal }) => {
  const data = useGetEpisodes(character.episode);

  const date = parseISO(character.created);
  const formattedDate = formatDate(date, "dd/MM/yyyy");
  return (
    <Modal
      className="max-w-[600px] w-full p-6 bg-white rounded-md border border-gray-300 relative"
      ariaHideApp={false}
      overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 p-8"
      isOpen={isModal}
      onRequestClose={closeModal}
    >
      <div className="">
        <button onClick={closeModal} className="absolute top-2 right-2">
          <IoClose className="h-5 w-5 hover:rotate-90 transition-transform duration-300" />
        </button>
        <div>
          <div className="flex flex-col mt-2 justify-center items-center gap-2 min-h-[100px] mb-8">
            <img
              loading="lazy"
              src={character.image}
              alt={character.name}
              className="w-24 h-24 object-contain rounded-full"
            />
            <h2 className="text-center font-semibold text-lg">
              {character.name}
            </h2>
          </div>
          <div className="flex flex-col justify-start gap-2">
            <p className="font-medium">
              Gender:{" "}
              <span className={cn("font-normal", character.gender === Gender.Male ? "text-blue-500" : "text-pink-500")}>
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
              CreatedAt:{" "}
              <span className="font-normal text-red-500">{formattedDate}</span>
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
            <p className="font-medium">
              Location:{" "}
              <span className="font-normal text-purple-500">
                {character.location.name}
              </span>{" "}
              <FaSearchLocation className="inline-block transition-transform duration-300 transform hover:scale-110" />
            </p>
          </div>
          <div className="my-2">
            <Separator />
          </div>
          <div>
            <h2 className="mb-2 text-xl font-medium">Episodes:</h2>
            <div className="max-h-[200px] overflow-y-auto flex flex-col gap-2 justify-start border border-gray-300 rounded-md p-2">
              {data
                ? data.map((episode) =>
                    episode.data ? (
                      <EpisodeItem
                        key={episode.data?.episode}
                        episode={episode.data}
                      />
                    ) : null
                  )
                : null}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalDetails;
