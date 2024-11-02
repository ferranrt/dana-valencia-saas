import { getPickupPoints } from "@/core/server/actions/get-pickup-points";
import { useQuery } from "@tanstack/react-query";

export const usePickupPoints = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: [`post`],
    queryFn: async () => {
      const data = await getPickupPoints();
      return data;
    },
    initialData: { points: [] },
  });

  return { data, isLoading, refetch };
};
