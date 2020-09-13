import React from "react";

export default function Feature() {
  return (
    <div className="pt-16 bg-gray-50 overflow-hidden lg:pt-24">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
        <svg
          className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
          />
        </svg>
        <div className="relative">
          <h3 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Como funciona Wakket?
          </h3>
          <p className="mt-4 max-w-xl mx-auto text-center text-xl leading-7 text-gray-500">
            Wakket resuelve las dificultades de vender con su celular sin que
            tenga que aprender ni cambiar como usa whatsapp.
          </p>
        </div>
        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h4 className="text-2xl leading-8 font-extrabold text-blue-800 tracking-tight sm:text-3xl sm:leading-9">
              Porque necesito Wakket?
            </h4>

            <p className="mt-4 border-b-2 pb-5 text-xl leading-7 text-blue-800">
              Porque es mas dificil vender cuando no estamos frente a frente.
            </p>

            <ul className="mt-10">
              <li>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-700 text-white">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg leading-6 font-medium text-gray-900">
                      Donde guardar los pedidos?
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      Es dificil para vendedor y comprador tener claridad sobre
                      un pedido en medio de una conversación larga, mas si
                      tenemos varios chats al mismo tiempo.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg leading-6 font-medium text-gray-900">
                      Quien pagó?
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      Cuando se juntan ventas, preguntas, pagos con otras tareas
                      es dificil saber quien pagó, a quien se le envió y a quien
                      no.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg leading-6 font-medium text-gray-900">
                      Como ordenar fotos y precios?
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      No es facil buscar las fotos de sus productos entre las de
                      sus perritos una y otra vez. Mientras por aparte se buscan
                      los precios y otros detalles.{" "}
                      <strong>Wakket es una mejor forma.</strong>
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg leading-6 font-medium text-gray-900">
                      Confianza y Garantia
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      En estos tiempos, como clientes, sentimos que estamos
                      tomando un riesgo al comprar por Whatsapp a travez de
                      alguien que no conocemos y para los vendedores es díficil
                      ganarse esa confianza en un chat.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            <p className="mt-10 uppercase text-sm leading-7 text-blue-600">
              Wakket es un servicio profesional de ventas de muy bajo costo
            </p>
          </div>
          <div className="mt-10 -mx-4 relative lg:mt-0">
            <svg
              className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
              width={784}
              height={404}
              fill="none"
              viewBox="0 0 784 404"
            >
              <defs>
                <pattern
                  id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={784}
                height={404}
                fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
              />
            </svg>
            <img className="relative mx-auto" width={490} src="/f1.jpg" alt />
          </div>
        </div>
        <svg
          className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
          />
        </svg>
        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2">
              <h4 className="text-2xl leading-8 font-extrabold text-blue-800 tracking-tight sm:text-3xl sm:leading-9">
                Como lo resuelve Wakket?
              </h4>
              <p className="mt-4 border-b-2 pb-5 text-xl leading-7 text-blue-800">
                Todo se hace via nuestro WhatsApp. No hace falta aprender,
                comprar, ni contratar - es genial!
              </p>
              <ul className="mt-10">
                <li>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h5 className="text-lg leading-6 font-medium text-gray-900">
                        Catalogo de producto
                      </h5>
                      <p className="mt-2 text-base leading-6 text-gray-500">
                        Envie a nuestro whatsapp el precio y la *foto durante o
                        antes de la venta. Los wa-Bots guardan y catalogan los
                        productos y servicios para cuando los necesite.
                      </p>
                      <small className="text-gray-400">
                        * Las fotos son opcionales{" "}
                      </small>
                    </div>
                  </div>
                </li>

                <li className="mt-10">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h5 className="text-lg leading-6 font-medium text-gray-900">
                        Pedidos y Proformas
                      </h5>
                      <p className="mt-2 text-base leading-6 text-gray-500">
                        Envie a nuestro whatsapp el telefono del cliente, escoja
                        facilmente los productos y los wa-Bots le envian un
                        enlace del pedido a usted y al cliente. Siga la
                        conversacion y agregue mas productos.
                      </p>
                    </div>
                  </div>
                </li>

                <li className="mt-14">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h5 className="text-lg leading-6 font-medium text-gray-900">
                        Pago Sinpe y Sinpe Móvil
                      </h5>
                      <p className="mt-2 text-base leading-6 text-gray-500">
                        Desde el enlace del pedido el cliente puede pagar y una
                        vez se reciba el pago tanto usted como el cliente seran
                        notificados - via WhatsApp.
                      </p>
                    </div>
                  </div>
                </li>

                <li className="mt-16 p-4 bg-blue-100">
                  <div className="flex">
                    <div className="flex-shrink-0"></div>
                    <div className="ml-4">
                      <h5 className="text-lg leading-6 font-medium text-blue-700">
                        Los WaBots
                      </h5>
                      <p className="mt-2 text-base leading-6 text-gray-500">
                        Son pequeños programas que viven dentro del Whatsapp de
                        Wakket y lo ayudan en segundos con todo lo que necesita
                        para vender por internet.{" "}
                        <strong>Vienen del futuro!</strong>
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
              <svg
                className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                width={784}
                height={404}
                fill="none"
                viewBox="0 0 784 404"
              >
                <defs>
                  <pattern
                    id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={784}
                  height={404}
                  fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
                />
              </svg>
              <img className="relative mx-auto" width={490} src="/f2.png" alt />
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 mt-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="text-base leading-6 text-blue-600 font-semibold tracking-wide uppercase">
              Ayudamos a que confien en su tienda
            </p>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Certificados de Confianza
            </h3>
            <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
              Para vender sin estar frente a frente la confianza lo es todo.
              Wakket se encarga de revisar, verificar y certificar todas
              nuestras cuentas.
            </p>
          </div>
          <div className="mt-10">
            <ul className="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
              <li>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">
                      Verificación Legal
                    </h4>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      Todos los vendedores aportan voluntaramente los documentos
                      que gusten. Cedula Física, Personeria Juridica, D-101,
                      Estados de Cuenta y recibos de luz,agua.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10 md:mt-0">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">
                      Verificación Social
                    </h4>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      Los vendedores solicitan a sus contactos que nos envien
                      "cartas de recomendación" en forma de mensajes de
                      WhatsApp, recibimos recomendaciones de clientes,
                      proveedores, empleados, y hasta de las mamas - en serio.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10 md:mt-0">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">
                      Evaluaciones y Puntuación
                    </h4>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      Todas las personas enviarnos evaluaciones de una cuenta
                      por whatsapp. Despues de cada compra pedimos a los
                      clientes que evaluen a su proveedor. Usamos las
                      evaluaciones, puntajes y volumenes de compras de cada
                      cuenta para recomendar o no la venta celular.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10 md:mt-0">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">
                      Afiliaciones y Wakket
                    </h4>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      Muchas personas y empresas estan afiliadas a colegios,
                      bancos, mutuales, cooperativas y camaras. Para mayor
                      confianza las mas prestigiosas tienen un mercado dentro de
                      Wakket donde se encuentran todos sus afilidos
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            <div className="max-w-screen-xl mt-18 mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:text-center">
                <p className=" text-lg mt-20 leading-6 text-blue-600 font-semibold tracking-wide uppercase">
                  Las cuentas obtienen un certificado de confianza
                </p>
                <p className=" text-base mt-1 leading-6 text-gray-500  font-semibold tracking-wide uppercase">
                  Los clientes pueden ver cada punto en detalle
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
