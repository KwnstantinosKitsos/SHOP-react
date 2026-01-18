import { createContext, useContext, useState } from 'react';

// 1. Create Context
const SearchContext = createContext();

// 2. Component Provier

export function SearchProvider({ children }) {
  const [searchItems, setSearchItems] = useState('');

  return (
    <>
      <SearchContext.Provider value={{ searchItems, setSearchItems }}>
        {children}
      </SearchContext.Provider>
    </>
  );
}

export const useSearch = () => useContext(SearchContext);
