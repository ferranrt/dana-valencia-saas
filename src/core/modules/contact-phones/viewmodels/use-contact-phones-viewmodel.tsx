import { ContactPhoneDTO } from "@/core/server/dtos/contact-phone.dto";
import { createContext, useContext, useMemo } from "react";
import { useContactForms } from "../hooks/use-contact-phones";

export type ContactPhonesViewModel = {
  contacts: Array<ContactPhoneDTO>;
  isLoading: boolean;
  refetch: () => void;
};

const Context = createContext<ContactPhonesViewModel>(
  {} as ContactPhonesViewModel
);

const Provider = ({ children }: { children: React.ReactNode }) => {
  const { data, loading, refetch } = useContactForms();
  const viewModel = useMemo((): ContactPhonesViewModel => {
    return {
      refetch: () => {
        refetch();
      },
      isLoading: loading,

      contacts: data.contacts,
    };
  }, [data.contacts, loading, refetch]);

  return <Context.Provider value={viewModel}>{children}</Context.Provider>;
};

const useViewModel = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useViewModel must be used within a ViewModelProvider");
  }

  return context;
};

export const useContactPhonesViewmodel = Object.assign(useViewModel, {
  Provider,
});
