import { FaceFrownIcon, InboxIcon } from "@heroicons/react/24/outline";

export const DataError = () => (
  <div className="flex justify-center py-12 text-red-600/60 gap-5 items-center font-semibold flex-wrap">
    <FaceFrownIcon className="w-12 h-12" />
    <span>Sorry, failed to fetch data</span>
  </div>
);


export const DataEmpty = () => (
    <div className="flex justify-center py-12 text-gray-800/30 items-center gap-5 font-semibold flex-wrap">
        <InboxIcon className="w-12 h-12" /> 
        <span> No Products Available</span>
    </div>
  );