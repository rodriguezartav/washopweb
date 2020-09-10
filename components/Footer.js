import React from "react";

export default function Footer() {
  return (
    <div className="bg-white fixed bottom-0">
      <div className="w-screen flex flex-col mx-auto  overflow-hidden ">
        <span className="relative z-0 inline-flex shadow-sm ">
          <button
            type="button"
            className="relative flex-1 items-center px-4 py-2  bg-indigo-700  border border-gray-300   text-sm leading-5 font-medium text-gray-50 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
          >
            Productos
          </button>
          <button
            type="button"
            className="-ml-px relative flex-1 items-center bg-gray-50  px-4 py-2 border border-gray-300  text-sm leading-5 font-medium text-indigo-500 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
          >
            Pedidos
          </button>
        </span>
      </div>
    </div>
  );
}
