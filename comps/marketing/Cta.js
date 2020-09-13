import React from "react";

export default function cta() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          Inicie su prueba gratis hoy
          <br className="hidden sm:inline" />
          <span className="text-blue-600" id="newsletter-headline">
            en 3 minutos podria estar vendido...
          </span>
        </h2>
        <form className="mt-8 sm:flex" aria-labelledby="newsletter-headline">
          <input
            aria-label="Email address"
            type="numver"
            required
            className="appearance-none w-full px-5 py-3 border border-gray-300 text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out sm:max-w-xs"
            placeholder="Ingrese su whatsapp"
          />
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <button className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
              Crear Cuenta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
