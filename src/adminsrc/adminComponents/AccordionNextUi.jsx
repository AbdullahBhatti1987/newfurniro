import { Accordion, AccordionItem } from "@nextui-org/react";

import { useNavigate } from "react-router-dom";

export default function AccordionNextUi() {
  const dashboard = {
    list: {
      Dashboard: [],
      Products: [
        { title: "List", to: "/admin/products/productlist" },
        { title: "Grid", to: "/admin/products/grid" },
        { title: "Details", to: "/admin/products/details" },
        { title: "Edit", to: "/admin/products/edit" },
        { title: "Create", to: "/admin/products/addproduct" },
        { title: "NewCreate", to: "/admin/products/createproduct" },
      ],
      Category: [
        { title: "List", to: "/admin/categories/list" },
        { title: "Edit", to: "/admin/categories/edit" },
        { title: "Create", to: "/admin/categories/create" },
      ],
      // Inventory: [
      //   { title: "View Stock", to: "/admin/inventory/view" },
      //   { title: "Manage Stock", to: "/admin/inventory/manage" },
      //   { title: "Stock Alerts", to: "/admin/inventory/alerts" },
      // ],
      Orders: [
        { title: "View Orders", to: "/admin/orders/users" },
        { title: "Order Reports", to: "/admin/orders/report" },
        { title: "Manage Orders", to: "/admin/orders/manage" },
      ],
      // Purchase: [
      //   { title: "Purchase Orders", to: "/admin/purchase/orders" },
      //   { title: "Manage Suppliers", to: "/admin/purchase/suppliers" },
      //   { title: "View Purchases", to: "/admin/purchase/view" },
      // ],
      // Invoices: [
      //   { title: "View Invoices", to: "/admin/invoices/view" },
      //   { title: "Create Invoice", to: "/admin/invoices/create" },
      //   { title: "Invoice Reports", to: "/admin/invoices/reports" },
      // ],
      Settings: [
        { title: "General Settings", to: "/admin/settings/general" },
        { title: "Payment Settings", to: "/admin/settings/payment" },
        { title: "Shipping Settings", to: "/admin/settings/shipping" },
        { title: "User Management", to: "/admin/settings/user-management" },
      ],
      // Customers: [
      //   { title: "View Customers", to: "/admin/customers/view" },
      //   { title: "Customer Groups", to: "/admin/customers/groups" },
      //   { title: "Customer Reports", to: "/admin/customers/reports" },
      // ],
      // Discounts: [
      //   { title: "Manage Discounts", to: "/admin/discounts/manage" },
      //   { title: "View Discount Codes", to: "/admin/discounts/codes" },
      //   { title: "Reports", to: "/admin/discounts/reports" },
      // ],
      Analytics: [
        { title: "Sales Reports", to: "/admin/analytics/sales" },
        { title: "Traffic Reports", to: "/admin/analytics/traffic" },
        { title: "Product Performance", to: "/admin/analytics/performance" },
      ],
    },
  };

  const navigate = useNavigate();

  return (
    <Accordion variant="bordered">
      {Object.entries(dashboard.list).map(([title, items], index) => (
        <AccordionItem
          key={index}
          aria-label={`Accordion ${index}`}
          title={title}
          className="hover:font-bold transition-all dashboardText hover:text-white ease-in-out"
        >
          <ul className="pl-4">
            {items.map((item, itemIndex) => (
              <li
                className="font-normal transition hover:translate-x-1 ease-in-out"
                key={itemIndex}
              >
                <button
                  className="block w-full text-left hover:text-orange-400 rightarrow" // Style the button
                  onClick={() => navigate(item.to)} // Use navigate to go to the route
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
