import { FC } from "react";
import { Episode } from "../types/episode.types";

interface Props {
  episode: Episode;
}

const EpisodeItem: FC<Props> = ({ episode }) => {
  return (
    <div className="flex justify-start items-center gap-2">
      <h2 className="font-medium text-base truncate">Episode: {episode.name}</h2>
      <p className="text-sm text-gray-400">{episode.episode}</p>
    </div>
  );
};

export default EpisodeItem;
