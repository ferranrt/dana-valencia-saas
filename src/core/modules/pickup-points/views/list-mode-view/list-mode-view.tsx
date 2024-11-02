import { Input } from "@/components/ui/input";
import { PickupPointsViewModel } from "@/core/modules/viewmodels/use-pickup-points-viewmodel";
import { PickupLocationListItem } from "./components/pickup-location-list-item";

export const ListModeView: React.FC<{ viewModel: PickupPointsViewModel }> = ({
  viewModel,
}) => {
  const { points, searchValue, setSearchValue } = viewModel;

  return (
    <div className="flex flex-col gap-4 p-2">
      <div className="h-12 items-center flex">
        <h2 className="text-xl font-semibold">Puntos de recogida</h2>
      </div>
      <Input
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        placeholder="Buscar"
      ></Input>
      {points.map((point) => {
        return <PickupLocationListItem location={point} key={point.id} />;
      })}
    </div>
  );
};
