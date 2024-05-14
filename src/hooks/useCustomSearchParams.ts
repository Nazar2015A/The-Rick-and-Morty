import { useSearchParams } from "react-router-dom";
import { PARAMS_CONSTS } from "../consts/pararms.consts";

export const useCustomSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    search: "",
    page: "1",
  });
  const getSearch = searchParams.get(PARAMS_CONSTS.SEARCH) as string;
  const getPage = searchParams.get(PARAMS_CONSTS.PAGE) as string;
  const setSearch = (value: string) => {
    setSearchParams((prev) => {
      prev.set(PARAMS_CONSTS.SEARCH, value);
      return prev;
    });
  };
  const setPage = (value: string) => {
    setSearchParams((prev) => {
      prev.set(PARAMS_CONSTS.PAGE, value);
      return prev;
    });
  };

  return {
    searchParams,
    setSearch,
    setPage,
    getSearch,
    getPage,
  };
};
