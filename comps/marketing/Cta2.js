import React from "react";

export default function cta() {
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="px-6 py-6 bg-blue-700 rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
          <div className="xl:w-0 xl:flex-1">
            <h2 className="text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl sm:leading-9">
              Si ya esta hablando por Whatsapp
            </h2>
            <p
              className="mt-3 max-w-3xl text-lg leading-6 text-indigo-200"
              id="newsletter-headline"
            >
              Podria estar vendiendo... empiece hoy mientras es gratis
            </p>
          </div>
          <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
            <form className="sm:flex" aria-labelledby="newsletter-headline">
              <input
                aria-label="Email address"
                type="number"
                required
                className="appearance-none w-full px-5 py-3 border border-transparent text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 transition duration-150 ease-in-out"
                placeholder="Ingrese su celular"
              />
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-500 hover:bg-blue-400 focus:outline-none focus:bg-blue-400 transition duration-150 ease-in-out">
                  Crear Cuenta
                </button>
              </div>
            </form>
            <p className="mt-3 text-sm leading-5 text-indigo-200">
              Las pruebas son gratis 7 días y luego requiren un pago de C/500,00
              via Sinpe Mobil para certificación.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
