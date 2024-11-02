import { createContext, useContext, useMemo, useState } from "react";
import { PickupPoint } from "../pickup-points/domain/pickup-point";
import { usePickupPoints } from "../pickup-points/hooks/use-pickup-points";
import { useDebouncedText } from "@/hooks/use-debounced-text";

type Mode = "map" | "list";

export type PickupPointsViewModel = {
  mode: Mode;
  updateMode: (mode: Mode) => void;
  points: Array<PickupPoint>;
  searchValue: string;
  setSearchValue: (value: string) => void;
  isLoading: boolean;
  refetch: () => void;
  debouncedSearchValue: string;
};

const Context = createContext<PickupPointsViewModel>(
  {} as PickupPointsViewModel
);

const Provider = ({ children }: { children: React.ReactNode }) => {
  const {
    value: searchValue,
    setValue: setSearchValue,
    debouncedValue: debouncedSearchValue,
  } = useDebouncedText();
  const {
    data: { points },
    refetch,

    loading,
  } = usePickupPoints({ searchText: debouncedSearchValue });
  const [mode, setMode] = useState<Mode>("list");

  const viewModel = useMemo((): PickupPointsViewModel => {
    return {
      refetch: () => {
        refetch();
      },
      debouncedSearchValue,
      isLoading: loading,
      mode,
      points,
      searchValue,
      setSearchValue,
      updateMode: (mode) => {
        setMode(mode);
      },
    };
  }, [
    debouncedSearchValue,
    loading,
    mode,
    points,
    refetch,
    searchValue,
    setSearchValue,
  ]);

  return <Context.Provider value={viewModel}>{children}</Context.Provider>;
};

const useViewModel = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useViewModel must be used within a ViewModelProvider");
  }

  return context;
};

export const usePickupPointsViewModel = Object.assign(useViewModel, {
  Provider,
});
