import {Pagination} from "@nextui-org/react";

export default function NextPaggination() {
  return (
    <Pagination isCompact showControls total={10} initialPage={1} className="flex justify-center"/>
  );
}