"use client";

import { Dropdown } from "flowbite-react";
import { HiLogout } from "react-icons/hi";

export function DropdownOption({label, username, email, onClick}) {
  return (
    <Dropdown label={label} inline>
      <Dropdown.Header>
        <span className="block text-sm">{username}</span>
        <span className="block truncate text-sm font-medium">
          {email}
        </span>
      </Dropdown.Header>
      <Dropdown.Item icon={HiLogout} onClick={onClick}>Sign out</Dropdown.Item>
    </Dropdown>
  );
}
