import React from "react";
import Navbar from "../navbar/Navbar";
import "./sidebar.css";
function Sidebar() {
  return (
    <div>
      <Navbar />
      <aside
        id="logo-sidebar"
        class="sidebar fixed top-3 left-3 z-40 w-60 h-5/6"
        aria-label="Sidebar"
      >
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800  rounded-xl">
          <a href="/" class="flex items-center pl-2.5 mb-5">
            <img
              src="public/Logo.svg"
              class="h-6 mr-3 sm:h-7"
              alt="Flowbite Logo"
            />
          </a>
          <ul class="space-y-2 font-medium">
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <img src="public/Home-Icons.svg" alt="" />
                <span class="ml-3">Home</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <img src="public/Vector.svg" alt="invoice" />
                <span class="flex-1 ml-3 whitespace-nowrap">Invoice</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <img src="public/Vector-1.svg" alt="Customers" />
                <span class="flex-1 ml-3 whitespace-nowrap">Customers</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <img src="public/Vector-2.svg" alt="Products" />
                <span class="flex-1 ml-3 whitespace-nowrap">Products</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <img src="public/Vector-3.svg" alt="Recrurring" />
                <span class="flex-1 ml-3 whitespace-nowrap">Recrurring</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <img src="public/Vector-4.svg" alt="" />
                <span class="flex-1 ml-3 whitespace-nowrap">Discount</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
