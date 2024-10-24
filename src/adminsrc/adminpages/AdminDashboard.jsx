"use client";

import { Button, Drawer } from "flowbite-react";
import { useState } from "react";
import AccordionNextUi from "../adminComponents/AccordionNextUi";
import { PiCodesandboxLogoBold } from "react-icons/pi";
import { Outlet } from "react-router";

function AdminDashboard() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="absolute right-4 top-4">
        <Button onClick={() => setIsOpen(true)}>SideBar</Button>
      </div>
      <Drawer
        backdrop={false}
        open={isOpen}
        onClose={handleClose}
        className="dashboardbgDark lg:w-[15%]"
      >
        <Drawer.Header title="DASHBOARD" titleIcon={PiCodesandboxLogoBold} />
        <Drawer.Items>
          <AccordionNextUi />
        </Drawer.Items>
      </Drawer>
      <div className={`content ${isOpen ? "drawer-open" : ""}`}>
        <Outlet />
       
      </div>
    </>
  );
}

export default AdminDashboard;
