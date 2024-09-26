import React from 'react';
import { handleSearch } from '@/api/actions/plants';
import SearchButton from '@/components/buttons/Search';
import { searchPlantType } from '@/interfaces/plants/search';

interface SearchProps {
  setSearch: (search: searchPlantType) => void;
  setName: (name: string) => void;
}


const Search: React.FC<SearchProps> = ({
                                         setSearch,
                                         setName
                                       }) => {

  const searchPlants = async (formData: FormData) => {
    const search = formData.get('search') as string;
    const response = await handleSearch(search);
    setName(search);
    setSearch(response);
    return search;
  };

  return (
    <form
      className="w-1/3 mx-auto py-16"
      action={searchPlants}>
      <div className="relative flex">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-primary-700 dark:text-primary-600" aria-hidden="true"
               fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <input name="search" type="search" id="search"
               className="block w-full p-4 ps-10 text-gray-900 border border-primary-300 rounded-lg bg-white-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-white dark:border-primary-800 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-primary-500 dark:focus:border-primary-800 focus:outline-primary-500"
               placeholder="Search for your plant" required />
        <div className="flex items-center">
          <SearchButton text="Search"></SearchButton>
        </div>
      </div>
    </form>
  );

};

export default Search;