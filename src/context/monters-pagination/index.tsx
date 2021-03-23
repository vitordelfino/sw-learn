import React, { createContext, useCallback, useContext, useState } from "react";

export const MonterPaginationContext = createContext<{
  page: number;
  next: () => void;
  previous: () => void;
}>({
  page: 1,
  next: () => {},
  previous: () => {},
});

export const useMontersPagination = () => useContext(MonterPaginationContext);

export const MonterPaginationProvider: React.FC = ({ children }) => {
  const [page, setPage] = useState(1);

  const next = useCallback(() => {
    setPage(page + 1);
  }, [page]);

  const previous = useCallback(() => {
    if (page > 0) setPage(page - 1);
  }, [page]);

  return (
    <MonterPaginationContext.Provider value={{ page, next, previous }}>
      {children}
    </MonterPaginationContext.Provider>
  );
};
