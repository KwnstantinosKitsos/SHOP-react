import { createContext, useContext, useState } from 'react';

// 1. Create Context
const SearchContext = createContext(null);

if (!SearchContext) {
  throw new Error('Be careful, useSearch must be used within SearchProvider!');
}
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
// Custom HOOK
export const useSearch = () => useContext(SearchContext);
