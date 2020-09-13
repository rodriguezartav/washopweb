import React from "react";

export default function Centros() {
  return (
    <div className="bg-blue-800">
      <div className="mx-auto  px-4 max-w-screen-xl sm:px-6 lg:px-8 py-20">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-4xl  text-center leading-9 font-extrabold text-blue-50 tracking-tight sm:text-5xl">
              Centros Comerciales en Internet
            </h2>
            <p className="text-xl max-w-2xl mx-auto text-center leading-8 text-gray-50">
              Aparte de ayudarle en Whatsapp, los <strong>WaBots</strong>{" "}
              construyen tiendas web con sus productos para que los clientes
              pueden buscarlos y comprarlos
            </p>
          </div>
        </div>
      </div>

      <div className="bg-indigo-50 py-6">
        <div className="relative text-center max-w-lg mx-auto lg:max-w-7xl">
          <div>
            <p className="mt-3 max-w-4xl text-center mx-auto text-xl leading-7  text-gray-700 sm:mt-4">
              Estas organizaciones cuentan con centros comercial a los que usted
              puede unirse.
              <br />
              Unase y vea como aumentan sus ventas y la confianza de sus
              clientes al comprar via Web o WhatsApp.
            </p>

            <ul className="grid  mt-16 grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow">
                <div className="flex-1 flex flex-col p-8">
                  <img
                    className="h-32 flex-shrink-0 mx-auto bg-black "
                    src="/coocique.png"
                    alt
                  />
                  <h3 className="mt-6 text-gray-900 text-lg leading-5 font-medium">
                    Coocique
                  </h3>
                  <dl className="mt-1 flex-grow flex flex-col justify-between">
                    <dt className="sr-only">Title</dt>
                    <dd className="text-gray-500 text-sm leading-5">
                      Mercado para los afiliados de Coocique y promocion de $100
                      en publicidad por més.
                    </dd>
                    <dt className="sr-only">Role</dt>
                    <dd className="mt-3">
                      <span className="px-2 py-1 text-teal-800 text-xs leading-4 font-medium bg-teal-100 rounded-full">
                        pronto
                      </span>
                    </dd>
                  </dl>
                </div>
              </li>
              <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow">
                <div className="flex-1 flex flex-col p-8">
                  <img
                    className=" h-32 flex-shrink-0 mx-auto bg-black "
                    src="/bn.png"
                    alt
                  />
                  <h3 className="mt-6 text-gray-900 text-lg leading-5 font-medium">
                    BN Pymes
                  </h3>
                  <dl className="mt-1 flex-grow flex flex-col justify-between">
                    <dt className="sr-only">Title</dt>
                    <dd className="text-gray-500 text-sm leading-5">
                      Mercado de todos los Pymes del Banco Nacional de Costa
                      Rica, con acceso a la cartera de clientes BN.fi.cr
                    </dd>
                    <dt className="sr-only">Role</dt>
                    <dd className="mt-3">
                      <span className="px-2 py-1 text-teal-800 text-xs leading-4 font-medium bg-teal-100 rounded-full">
                        pronto
                      </span>
                    </dd>
                  </dl>
                </div>
              </li>
              <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow">
                <div className="flex-1 flex flex-col p-8 h-32">
                  <img
                    className=" h-32 object-cover flex-shrink-0 mx-auto bg-black "
                    src="/mp.png"
                    alt
                  />
                  <h3 className="mt-6 text-gray-900 text-lg leading-5 font-medium">
                    Multiplaza
                  </h3>
                  <dl className="mt-1 flex-grow flex flex-col justify-between">
                    <dt className="sr-only">Title</dt>
                    <dd className="text-gray-500 text-sm leading-5">
                      Todas las tiendas fisicas cuentan con un espacio en este
                      centro digital, eventos y actividades de Multiplaza.
                    </dd>
                    <dt className="sr-only">Role</dt>
                    <dd className="mt-3">
                      <span className="px-2 py-1 text-teal-800 text-xs leading-4 font-medium bg-teal-100 rounded-full">
                        pronto
                      </span>
                    </dd>
                  </dl>
                </div>
              </li>
              <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow">
                <div className="flex-1 flex flex-col p-8 h-32">
                  <img
                    className=" h-32 object-cover flex-shrink-0 mx-auto bg-black "
                    src="/cccr.png"
                    alt
                  />
                  <h3 className="mt-6 text-gray-900 text-lg leading-5 font-medium">
                    Camara de Comercio de Costa Rica
                  </h3>
                  <dl className="mt-1 flex-grow flex flex-col justify-between">
                    <dt className="sr-only">Title</dt>
                    <dd className="text-gray-500 text-sm leading-5">
                      Los de la CCCR cuentan con un Wakket para vender su
                      productos en internet y via celular.
                    </dd>
                    <dt className="sr-only">Role</dt>
                    <dd className="mt-3">
                      <span className="px-2 py-1 text-teal-800 text-xs leading-4 font-medium bg-teal-100 rounded-full">
                        pronto
                      </span>
                    </dd>
                  </dl>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
