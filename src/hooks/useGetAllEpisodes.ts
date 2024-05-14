import { useQueries } from "@tanstack/react-query";
import characterService from "../service/CharacterService";

const useGetEpisodes = (episodes: string[]) => {
  return useQueries({
    queries: episodes.map((episode) => ({
      queryKey: [episode],
      queryFn: () => characterService.getEpisode(episode),
    })),
  });
};

export default useGetEpisodes;
