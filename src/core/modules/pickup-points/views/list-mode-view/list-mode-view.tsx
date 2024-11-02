import { Input } from "@/components/ui/input";
import { PickupPointsViewModel } from "@/core/modules/viewmodels/use-pickup-points-viewmodel";
import { PickupLocationListItem } from "./components/pickup-location-list-item";
import { Skeleton } from "@/components/ui/skeleton";

export const ListModeView: React.FC<{ viewModel: PickupPointsViewModel }> = ({
  viewModel,
}) => {
  const { points, searchValue, setSearchValue, isLoading } = viewModel;

  return (
    <div className="flex flex-col gap-2 p-2 flex-1 border border-red-500 overflow-hidden">
      <Input
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        placeholder="Buscar por nombre o ciudad"
      ></Input>
      <div className="flex-1 flex flex-col gap-2 overflow-y-auto">
        {isLoading ? (
          <>
            {Array(4)
              .fill(0)
              .map((_, index) => {
                return <Skeleton key={index} className="h-20" />;
              })}
          </>
        ) : (
          points.map((point) => {
            return <PickupLocationListItem location={point} key={point.id} />;
          })
        )}
      </div>
    </div>
  );
};
