import React from "react";

export default function Hero() {
  return (
    <div className="relative bg-blue-50">
      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-28 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <p className="mb-5 max-w-md mx-auto text-lg text-blue-700 sm:text-2xl  md:max-w-3xl">
              Wakket, la tienda mobil diseñada para Costa Rica
            </p>

            <h2 className="text-4xl uppercase tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-4xl">
              Venda en línea
              <br />{" "}
              <span className="text-blue-700 text-5xl ">usando WhatsApp</span>
            </h2>

            <p className="mt-3 max-w-md mx-auto text-lg text-gray-900 sm:text-2xl md:mt-5 md:max-w-3xl">
              Atienda, venda, cobre y envie desde su celular, <br />
              <span className="underline">
                solo tiene que saber usar whatsapp
              </span>
            </p>

            <p className="mt-12 max-w-md mx-auto text-lg text-gray-800 sm:text-lg  md:mt-48 md:max-w-3xl">
              Pruebelo gratis y dese cuenta por usted mismo
            </p>

            <div className="mt-2 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-700 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                >
                  Quiere abrir su tienda hoy?
                </a>
              </div>
            </div>
            <h2 className="text-4xl mt-4 tracking-tight leading-1 font-bold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-xl">
              Oferta de Inscripción:
              <br className="xl:hidden" />{" "}
              <span className="text-blue-600"> ₡1000</span>
            </h2>

            <p className="mt-2 max-w-md mx-auto text-sm text-blue-700 sm:text-lg  md:max-w-3xl">
              Precio normal: ₡25,000
            </p>
            <p className="mt-10 max-w-md mx-auto text-base text-gray-700   md:max-w-3xl">
              * La inscripción se usa para certificar
              <br /> su identidad via Sinpe Movil
            </p>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="/hero3.jpg"
            alt="Woman on her phone"
          />
          <div
            style={{
              width: "100%",
              height: 100,
              position: "absolute",
              opacity: 0.3,
              background:
                "linear-gradient(150deg, #53f 15%, #05d5ff 70%, #a6ffcb 94%)",
            }}
          ></div>
          <div
            className="bg-red-500"
            style={{
              width: "100%",
              height: 300,
              position: "absolute",
              opacity: 0.3,
              bottom: 0,
              right: 0,
            }}
          ></div>
          <div
            className="bg-indigo-500"
            style={{
              width: 100,
              height: 100,
              position: "absolute",
              opacity: 0.3,
              top: 120,
              right: 0,
            }}
          ></div>
          <div
            className="bg-indigo-500"
            style={{
              width: 100,
              height: 100,
              position: "absolute",
              opacity: 0.3,
              top: 180,
              right: 100,
            }}
          ></div>
          <div
            className="bg-indigo-500"
            style={{
              width: 100,
              height: 100,
              position: "absolute",
              opacity: 0.3,
              top: 280,
              right: 200,
            }}
          ></div>
        </div>
      </main>
    </div>
  );
}
