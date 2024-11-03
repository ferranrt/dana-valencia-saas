import { PickupPointsViewModel } from "@/core/modules/viewmodels/use-pickup-points-viewmodel";
import dynamic from "next/dynamic";

export const MapModeView: React.FC<{ viewModel: PickupPointsViewModel }> = ({
  viewModel,
}) => {
  const { points } = viewModel;
  const LazyMap = dynamic(() => import("../../dynamic-map"), {
    ssr: false,
    loading: () => <p>Loading...</p>,
  });
  return (
    <div className="h-full w-full ">
      <LazyMap points={points.map((x) => x)} />
    </div>
  );
};
