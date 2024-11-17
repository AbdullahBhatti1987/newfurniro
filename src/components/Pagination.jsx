import {Pagination} from "@nextui-org/react";

export default function NextPaggination({total , initialPage}) {
  return (
    <Pagination isCompact showControls total={total} initialPage={initialPage} className="flex justify-center"/>
  );
}