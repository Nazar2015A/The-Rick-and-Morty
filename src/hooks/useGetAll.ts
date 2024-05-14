import { useQuery } from "@tanstack/react-query";
import { QUERY_CONSTS } from "../consts/query.consts";
import characterService from "../service/CharacterService";

const useGetAllCharacters = (page: string) => {
  return useQuery({
    queryKey: [QUERY_CONSTS.ALL, page],
    queryFn: () => characterService.getAllCharacters(page),
    retry: 1,
  });
};

export default useGetAllCharacters;
