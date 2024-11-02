import { getPickupPoints } from "@/core/server/actions/get-pickup-points";
import { useQuery } from "@tanstack/react-query";
import { fromPointDTOtoEntity } from "../mappers/from-point-dto-to-entity";

const QUERY_KEY = `get_pickup_points`;

export const usePickupPoints = (args?: { searchText: string }) => {
  console.log("usePickupPoints");
  console.log(args?.searchText);
  const { data, isLoading, fetchStatus, refetch } = useQuery({
    queryKey: [QUERY_KEY, args?.searchText],
    queryFn: async () => {
      const data = await getPickupPoints({ searchText: args?.searchText });
      const mapped = data.points.map((point) => {
        return fromPointDTOtoEntity(point);
      });
      return { points: mapped };
    },
    initialData: { points: [] },
  });

  return { data, isLoading, refetch, loading: fetchStatus === "fetching" };
};
