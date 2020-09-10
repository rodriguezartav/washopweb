import Head from "next/head";
import { useRouter } from "next/router";

import Link from "next/link";
import Layout from "views/Layout";

export async function getServerSideProps({ params }) {
  // Fetch data from external API
  //const res = await fetch(`${process.env.API_URL}/cart/${params.cart_id}`);
  //console.log(res.text);
  //const data = await res.json();

  // Pass data to the page via props
  return { props: { cart: {} } };
}

export default function Checkout(props) {
  const router = useRouter();

  return (
    <Layout>
      <div className="mx-5 mt-3">
        <div className="text-center mb-10">
          <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Estamos listos
          </h2>

          <p className="mt-4 text-lg leading-6 text-gray-500">
            Le enviamos su pedido por SMS.
          </p>

          <p className="text-sm mt-10 leading-6 text-gray-500">
            Sinpe: CR138336384749474947449
          </p>

          <p className="text-sm leading-6 text-gray-500">
            Sinpe Movil: 8755-3333
          </p>
          <p className="text-sm leading-6 text-gray-500">Cedula: 111111111</p>
          <p className="text-sm mt-0 leading-6 text-gray-500">
            Monto: 45,000.00CRC
          </p>
          <p className="mt-7 border border-gray-600 p-5 text-xl leading-6 text-gray-900">
            #455556
          </p>

          <p className="mt-0 text-xl leading-6 text-gray-800">
            Escriba este codigo en la descripcion del SINPE.
          </p>
        </div>

        <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
          Preguntas Frecuentes:
        </h2>
        <p className="text-gray-400 text-xs font-medium ">
          Recuerde tambien preguntarnos por whatsapp
        </p>

        <div className="bg-gray-50">
          <div className="max-w-screen-xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="  border-gray-200 ">
                <dl>
                  <div>
                    <dt className="text-lg leading-7">
                      {/* Expand/collapse question button */}
                      <button className="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900">
                        <span className="font-medium text-gray-900">
                          What's the best thing about Switzerland?
                        </span>
                        <span className="ml-6 h-7 flex items-center">
                          {/*
              Expand/collapse icon, toggle classes based on question open state.

              Open: "-rotate-180", Closed: "rotate-0"
            */}
                          <svg
                            className="-rotate-180 h-6 w-6 transform"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </span>
                      </button>
                    </dt>
                    <dd className="mt-2 pr-12">
                      <p className="text-base leading-6 text-gray-500">
                        I don't know, but the flag is a big plus. Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Quas
                        cupiditate laboriosam fugiat.
                      </p>
                    </dd>
                  </div>
                  <div className="mt-6 border-t border-gray-200 pt-6">
                    <div>
                      <dt className="text-lg leading-7">
                        {/* Expand/collapse question button */}
                        <button className="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900">
                          <span className="font-medium text-gray-900">
                            How do you make holy water?
                          </span>
                          <span className="ml-6 h-7 flex items-center">
                            {/*
                Expand/collapse icon, toggle classes based on question open state.

                Open: "-rotate-180", Closed: "rotate-0"
              */}
                            <svg
                              className="rotate-0 h-6 w-6 transform"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </span>
                        </button>
                      </dt>
                      <dd className="mt-2 pr-12">
                        <p className="text-base leading-6 text-gray-500">
                          You boil the hell out of it. Lorem ipsum dolor sit
                          amet consectetur adipisicing elit. Magnam aut tempora
                          vitae odio inventore fuga aliquam nostrum quod porro.
                          Delectus quia facere id sequi expedita natus.
                        </p>
                      </dd>
                    </div>
                  </div>
                  <div className="mt-6 border-t border-gray-200 pt-6">
                    <div>
                      <dt className="text-lg leading-7">
                        {/* Expand/collapse question button */}
                        <button className="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900">
                          <span className="font-medium text-gray-900">
                            What do you call someone with no body and no nose?
                          </span>
                          <span className="ml-6 h-7 flex items-center">
                            {/*
                Expand/collapse icon, toggle classes based on question open state.

                Open: "-rotate-180", Closed: "rotate-0"
              */}
                            <svg
                              className="rotate-0 h-6 w-6 transform"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </span>
                        </button>
                      </dt>
                      <dd className="mt-2 pr-12">
                        <p className="text-base leading-6 text-gray-500">
                          Nobody knows. Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Culpa, voluptas ipsa quia excepturi,
                          quibusdam natus exercitationem sapiente tempore labore
                          voluptatem.
                        </p>
                      </dd>
                    </div>
                  </div>
                  <div className="mt-6 border-t border-gray-200 pt-6">
                    <div>
                      <dt className="text-lg leading-7">
                        {/* Expand/collapse question button */}
                        <button className="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900">
                          <span className="font-medium text-gray-900">
                            Why do you never see elephants hiding in trees?
                          </span>
                          <span className="ml-6 h-7 flex items-center">
                            {/*
                Expand/collapse icon, toggle classes based on question open state.

                Open: "-rotate-180", Closed: "rotate-0"
              */}
                            <svg
                              className="rotate-0 h-6 w-6 transform"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </span>
                        </button>
                      </dt>
                      <dd className="mt-2 pr-12">
                        <p className="text-base leading-6 text-gray-500">
                          Because they're so good at it. Lorem ipsum dolor sit
                          amet consectetur adipisicing elit. Quas cupiditate
                          laboriosam fugiat.
                        </p>
                      </dd>
                    </div>
                  </div>
                  <div className="mt-6 border-t border-gray-200 pt-6">
                    <div>
                      <dt className="text-lg leading-7">
                        {/* Expand/collapse question button */}
                        <button className="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900">
                          <span className="font-medium text-gray-900">
                            Why can't you hear a pterodactyl go to the bathroom?
                          </span>
                          <span className="ml-6 h-7 flex items-center">
                            {/*
                Expand/collapse icon, toggle classes based on question open state.

                Open: "-rotate-180", Closed: "rotate-0"
              */}
                            <svg
                              className="rotate-0 h-6 w-6 transform"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </span>
                        </button>
                      </dt>
                      <dd className="mt-2 pr-12">
                        <p className="text-base leading-6 text-gray-500">
                          Because the pee is silent. Lorem ipsum dolor sit amet,
                          consectetur adipisicing elit. Ipsam, quas voluptatibus
                          ex culpa ipsum, aspernatur blanditiis fugiat ullam
                          magnam suscipit deserunt illum natus facilis atque
                          vero consequatur! Quisquam, debitis error.
                        </p>
                      </dd>
                    </div>
                  </div>
                  <div className="mt-6 border-t border-gray-200 pt-6">
                    <div>
                      <dt className="text-lg leading-7">
                        {/* Expand/collapse question button */}
                        <button className="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900">
                          <span className="font-medium text-gray-900">
                            Why did the invisible man turn down the job offer?
                          </span>
                          <span className="ml-6 h-7 flex items-center">
                            {/*
                Expand/collapse icon, toggle classes based on question open state.

                Open: "-rotate-180", Closed: "rotate-0"
              */}
                            <svg
                              className="rotate-0 h-6 w-6 transform"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </span>
                        </button>
                      </dt>
                      <dd className="mt-2 pr-12">
                        <p className="text-base leading-6 text-gray-500">
                          He couldn't see himself doing it. Lorem ipsum dolor
                          sit, amet consectetur adipisicing elit. Eveniet
                          perspiciatis officiis corrupti tenetur. Temporibus ut
                          voluptatibus, perferendis sed unde rerum deserunt
                          eius.
                        </p>
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
        <div className="relative max-w-xl mx-auto">
          <svg
            className="absolute left-full transform translate-x-1/2"
            width={404}
            height={404}
            fill="none"
            viewBox="0 0 404 404"
          >
            <defs>
              <pattern
                id="85737c0e-0916-41d7-917f-596dc7edfa27"
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
              height={404}
              fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
            />
          </svg>
          <svg
            className="absolute right-full bottom-0 transform -translate-x-1/2"
            width={404}
            height={404}
            fill="none"
            viewBox="0 0 404 404"
          >
            <defs>
              <pattern
                id="85737c0e-0916-41d7-917f-596dc7edfa27"
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
              height={404}
              fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
            />
          </svg>
        </div>
      </div>
    </Layout>
  );
}
