"use client";

import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";

export function Component({ to, linkName }) {
  return (
    <Breadcrumb
      aria-label="Default breadcrumb example"
      className="text-black text-xl"
    >
      <Breadcrumb.Item className="text-black" icon={HiHome}>
        <Link to={"/"} className="text-black">
          Home
        </Link>
      </Breadcrumb.Item>
      
      <Breadcrumb.Item>
        <Link to={to} className="text-black">
          {linkName}
        </Link>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}
