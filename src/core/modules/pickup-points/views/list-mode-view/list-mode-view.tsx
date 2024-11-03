import { Input } from "@/components/ui/input";
import { PickupPointsViewModel } from "@/core/modules/viewmodels/use-pickup-points-viewmodel";
import { PickupLocationListItem } from "./components/pickup-location-list-item";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";

export const ListModeView: React.FC<{ viewModel: PickupPointsViewModel }> = ({
  viewModel,
}) => {
  const { points, searchValue, setSearchValue, isLoading } = viewModel;
  const [opened, setOpened] = useState<string | null>(null);
  return (
    <div className="flex flex-col gap-2 p-2">
      <Input
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        placeholder="Buscar por nombre o ciudad"
      ></Input>
      <div className=" flex flex-col flex-1 overflow-y-auto gap-2">
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
            return (
              <PickupLocationListItem
                opened={point.id === opened}
                onToggle={() => {
                  setOpened(point.id === opened ? null : point.id);
                }}
                location={point}
                key={point.id}
              />
            );
          })
        )}
      </div>
    </div>
  );
};
