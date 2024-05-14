import React, { FC } from "react";
import Select from "react-select";
import Pagination from "rc-pagination/lib/Pagination";
import { Gender, Species, Status } from "../types/character.types";
import {
  GENDER_OPTIONS,
  SPECIES_OPTIONS,
  STATUS_OPTIONS,
} from "../consts/sort.consts";
import "rc-pagination/assets/index.css";

interface Props {
  count: number;
  value: string;
  currentPage: number;
  pageSize: number;
  setValue: (value: string) => void;
  setFilters: React.Dispatch<
    React.SetStateAction<{
      gender: Gender | null;
      status: Status | null;
      species: Species | null;
    }>
  >;
  setCurrentPage: (value: string) => void;
}

const SortingAndFiltering: FC<Props> = ({
  count,
  currentPage,
  pageSize,
  value,
  setValue,
  setFilters,
  setCurrentPage,
}) => {
  const handleSetValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page.toString());
  };
  return (
    <div className="flex flex-col-reverse items-center gap-8 px-2 sm:px-12 mt-4">
      <div className="h-full">
        <Pagination
          className=""
          total={count}
          onChange={handlePageChange}
          current={currentPage}
          pageSize={pageSize}
          showPrevNextJumpers={false}
          prevIcon={
            <span className="block bg-black text-white px-3 select-none rounded-md active:bg-black/60 transition-colors">
              Prev
            </span>
          }
          nextIcon={
            <span className="block bg-black text-white px-3 select-none rounded-md active:bg-black/60 transition-colors">
              Next
            </span>
          }
        />
      </div>
      <div className="grid grid-cols-1 place-items-end md:grid-cols-2 lg:grid-cols-4 gap-4 h-full w-full">
        <Select
          onChange={(option) =>
            option && handleFilterChange("gender", option.value)
          }
          className="w-full"
          placeholder="Sort by gender"
          options={GENDER_OPTIONS}
        />
        <Select
          onChange={(option) =>
            option && handleFilterChange("status", option.value)
          }
          className="w-full"
          placeholder="Sort by status"
          options={STATUS_OPTIONS}
        />
        <Select
          onChange={(option) =>
            option && handleFilterChange("species", option.value)
          }
          className="w-full"
          placeholder="Sort by species"
          options={SPECIES_OPTIONS}
        />
        <input
          className="py-1 px-3 border border-gray-300 rounded-md focus:border-gray-600 outline-none transition-colors h-full w-full min-h-[35px]"
          type="text"
          value={value}
          placeholder="Filter by name"
          onChange={handleSetValue}
        />
      </div>
    </div>
  );
};

export default SortingAndFiltering;
