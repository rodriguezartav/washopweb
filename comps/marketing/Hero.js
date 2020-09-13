import React from "react";

export default function Hero() {
  return (
    <div className="relative bg-gray-50">
      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h2 className="text-4xl uppercase tracking-tight leading-10 font-extrabold text-gray-800 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-4xl">
              Venda en línea
              <br />{" "}
              <span className="text-gray-800 text-5xl ">usando WhatsApp</span>
            </h2>

            <p className="mt-3 max-w-md mx-auto text-lg text-gray-600 sm:text-xl md:mt-5 md:max-w-3xl">
              Descubra la forma mas facil de vender por internet diseñada
              especificamente para Costa Rica.
            </p>

            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Atienda, venda y cobre desde su celular.
              <br className=" md:visible" />
              Sí se puede!
            </p>

            <h2 className="text-4xl mt-10 tracking-tight leading-1 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-xl">
              Super oferta un solo pago:
              <br className="xl:hidden" />{" "}
              <span className="text-blue-600">₡500</span>
            </h2>
            <p className="mt-0 max-w-md mx-auto text-sm text-blue-700 sm:text-lg  md:max-w-3xl">
              precio normal: ₡25,000
            </p>

            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-700 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                >
                  Abra su cuenta aquí
                </a>
              </div>

              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-blue-600 bg-white hover:text-blue-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                >
                  1era venta en 3 minutos
                </a>
              </div>
            </div>
            <p className="mt-3 max-w-md mx-auto text-sm text-blue-500 sm:text-lg  md:max-w-3xl">
              Puede probar el sistema sin pagar - prueba de 7 días gratis
            </p>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
            alt="Woman on her phone"
          />
        </div>
      </main>
    </div>
  );
}
