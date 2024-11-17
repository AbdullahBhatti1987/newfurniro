import {Pagination} from "@nextui-org/react";

export default function NextPaggination({total , initialPage, selectPage}) {
  return (
    <Pagination isCompact showControls onChange={selectPage} total={total} initialPage={initialPage} className="flex justify-center"/>
  );
}