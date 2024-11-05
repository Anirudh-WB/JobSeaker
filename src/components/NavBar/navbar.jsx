import React from "react";

function Navbar() {
  return (
    <nav class="bg-white border-gray-200 dark:bg-slate-200">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" class="h-10" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">JobSeeker</span>
        </a>

        <button
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-menu"
            aria-expanded="false"
            onclick="{document.getElementById('navbar-menu').classList.toggle('hidden')}">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M3 5h14a1 1 0 010 2H3a1 1 0 110-2zm0 6h14a1 1 0 010 2H3a1 1 0 110-2zm0 6h14a1 1 0 010 2H3a1 1 0 110-2z" clip-rule="evenodd"></path>
            </svg>
        </button>

        <div id="navbar-menu" class="hidden w-full md:flex md:items-center md:w-auto">
            <div class="mt-1 flex space-x-2">
                <button type="button" class="text-blue-900 bg-white border border-blue-300 focus:outline-none hover:bg-blue-100 focus:ring-4 focus:ring-blue-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-800 dark:text-white dark:border-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-600 dark:focus:ring-blue-700">Login</button>
                <button type="button" class="text-red-600 bg-white border border-red-300 focus:outline-none hover:bg-red-100 focus:ring-4 focus:ring-red-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-800 dark:text-white dark:border-red-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Register</button>
            </div>
        </div>
    </div> 
</nav>

  );
}

export default Navbar;
