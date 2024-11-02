import { getContactPhones } from "@/core/server/actions/get-contact-phones";
import { useQuery } from "@tanstack/react-query";

const QUERY_KEY = `get_contact_phones`;

export const useContactForms = (args?: { searchText: string }) => {
  const { data, isLoading, fetchStatus, refetch } = useQuery({
    queryKey: [QUERY_KEY, args?.searchText],
    queryFn: async () => {
      const { data } = await getContactPhones();

      return { contacts: data };
    },
    initialData: { contacts: [] },
  });

  return { data, isLoading, refetch, loading: fetchStatus === "fetching" };
};
