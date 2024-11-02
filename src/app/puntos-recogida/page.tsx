import { PickupPointsScreen } from "@/core/pickup-points/pickup-points-screen";

export default function PickupPoints() {
  return (
    <div className="relative flex flex-col flex-1 border-green-500 border h-full  overflow-hidden">
      <div className="h-72">
        <PickupPointsScreen />
      </div>
    </div>
  );
}
