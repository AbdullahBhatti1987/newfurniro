
"use client";

import { TextInput } from "flowbite-react";
import { CiUnlock } from "react-icons/ci";

export function PassComponent({placeholder, onChange, id}) {
  return (
    <div className="">   
      <TextInput id={id} type="password" icon={CiUnlock} sizing="lg" placeholder={placeholder} onChange={onChange} required />
    </div>
  );
}
