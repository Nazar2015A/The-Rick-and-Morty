import { useMemo, useState } from "react";
import CharacterItem from "./CharacterItem";
import useDebounce from "../hooks/useDebounce";

import { Gender, Species, Status } from "../types/character.types";
import SortingAndFiltering from "./SortingAndFiltering";
import Loading from "./ui/Loading";
import Error from "./ui/Error";
import useGetAllCharacters from "../hooks/useGetAll";
import { useCustomSearchParams } from "../hooks/useCustomSearchParams";

const CharacterContainer = () => {
  const { getSearch, getPage, setPage, setSearch } = useCustomSearchParams();
  const { data, isLoading, isError } = useGetAllCharacters(getPage);
  const [filters, setFilters] = useState<{
    gender: Gender | null;
    status: Status | null;
    species: Species | null;
  }>({
    gender: null,
    status: null,
    species: null,
  });
  const debouncedSearchValue = useDebounce(getSearch, 300);

  const filteredData = useMemo(
    () =>
      data?.results.filter((item) => {
        const nameMatches = item.name
          .toLowerCase()
          .includes(debouncedSearchValue.toLowerCase());
        const genderMatches = !filters.gender || item.gender === filters.gender;
        const statusMatches = !filters.status || item.status === filters.status;
        const speciesMatches =
          !filters.species || item.species === filters.species;
        return nameMatches && genderMatches && statusMatches && speciesMatches;
      }),
    [data?.results, debouncedSearchValue, filters]
  );
  return (
    <div className="">
      <SortingAndFiltering
        count={data?.info.count || 0}
        currentPage={Number(getPage)}
        pageSize={20}
        setCurrentPage={setPage}
        setFilters={setFilters}
        setValue={setSearch}
        value={getSearch}
      />
      {isLoading ? (
        <Loading />
      ) : filteredData && !isError ? (
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredData.map((character) => (
            <CharacterItem key={character.id} character={character} />
          ))}
        </div>
      ) : (
        <Error />
      )}
    </div>
  );
};

export default CharacterContainer;
