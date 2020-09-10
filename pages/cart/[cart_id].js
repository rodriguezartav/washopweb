import Head from "next/head";
import { useRouter } from "next/router";

import Link from "next/link";
import Layout from "views/Layout";

export async function getServerSideProps({ params }) {
  // Fetch data from external API
  const res = await fetch(`${process.env.API_URL}/cart/${params.cart_id}`);
  console.log(res.text());
  const data = await res.json();

  // Pass data to the page via props
  return { props: { cart: {} } };
}

export default function Home(props) {
  const router = useRouter();

  const [showRegister, setShowRegister] = React.useState(false);

  return (
    <Layout>
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <div className="mt-3 mx-3">
          <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
            Eco-Bamboo CR
          </h2>
          <p className="text-gray-400 text-xs font-medium ">
            Lista de Productos
          </p>
        </div>
        <ul>
          <li>
            <a
              href="#"
              className="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
            >
              <div className="flex items-center px-4 py-4 sm:px-6">
                <div className="min-w-0 flex-1 flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-12 w-12 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt
                    />
                  </div>
                  <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                    <div>
                      <div className="text-sm leading-5 font-medium text-indigo-600 truncate">
                        Ricardo Cooper
                      </div>
                      <div className="mt-2 flex items-center text-sm leading-5 text-gray-500">
                        <svg
                          className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        <span className="truncate">
                          ricardo.cooper@example.com
                        </span>
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <div>
                        <div className="text-sm leading-5 text-gray-900">
                          Applied on
                          <time dateTime="2020-01-07">January 7, 2020</time>
                        </div>
                        <div className="mt-2 flex items-center text-sm leading-5 text-gray-500">
                          <svg
                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Completed phone screening
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <svg
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>

      <div className="mx-5">
        <p className="mt-4 text-gray-800 text-base leading-6">
          Ingrese su dirección
        </p>

        <form
          action="#"
          method="POST"
          className="grid grid-cols-1 row-gap-6 sm:grid-cols-2 sm:col-gap-8"
        >
          <div>
            <div className="mt-1 relative rounded-md shadow-sm">
              <textarea
                id="first_name"
                className="form-input py-3 px-4 block w-full transition ease-in-out duration-150"
              ></textarea>
            </div>
          </div>
        </form>

        <div className="mt-3 mx-3 rounded-md shadow sm:mt-0  sm:flex-shrink-0">
          <button className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:bg-indigo-400 transition duration-150 ease-in-out">
            Pagar con Sinpe
          </button>
        </div>
      </div>

      <div className="mt-8 mx-3">
        <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
          Certificados de Confianza
        </h2>
        <p className="text-gray-400 text-xs font-medium ">
          Formas de verificar la tienda
        </p>
      </div>
      <ul className="mt-3 mx-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <li className="col-span-1 flex shadow-sm rounded-md">
          <div className="flex-shrink-0 flex items-center justify-center w-16 bg-pink-600 text-white text-sm leading-5 font-medium rounded-l-md">
            BN
          </div>
          <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
            <div className="flex-1 px-4 py-2 text-sm leading-5 truncate">
              <a
                href="#"
                className="text-gray-900 font-medium hover:text-gray-600 transition ease-in-out duration-150"
              >
                Cuenta Bancaria
              </a>
              <p className="text-gray-500">Eco Bambu tiene cuenta bancaria</p>
            </div>
            <div className="flex-shrink-0 pr-2">
              <button className="w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition ease-in-out duration-150">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>
            </div>
          </div>
        </li>
        <li className="col-span-1 flex shadow-sm rounded-md">
          <div className="flex-shrink-0 flex items-center justify-center w-16 bg-purple-600 text-white text-sm leading-5 font-medium rounded-l-md">
            FE
          </div>
          <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
            <div className="flex-1 px-4 py-2 text-sm leading-5 truncate">
              <a
                href="#"
                className="text-gray-900 font-medium hover:text-gray-600 transition ease-in-out duration-150"
              >
                Ministerio de Hacienda
              </a>
              <p className="text-gray-500">Emite Factura Electronica</p>
            </div>
            <div className="flex-shrink-0 pr-2">
              <button className="w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition ease-in-out duration-150">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>
            </div>
          </div>
        </li>
        <li className="col-span-1 flex shadow-sm rounded-md">
          <div className="flex-shrink-0 flex items-center justify-center w-16 bg-orange-500 text-white text-sm leading-5 font-medium rounded-l-md">
            14
          </div>
          <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
            <div className="flex-1 px-4 py-2 text-sm leading-5 truncate">
              <a
                href="#"
                className="text-gray-900 font-medium hover:text-gray-600 transition ease-in-out duration-150"
              >
                Entregas Exitosas
              </a>
              <p className="text-gray-500">Ha vendido y entregado</p>
            </div>
            <div className="flex-shrink-0 pr-2">
              <button className="w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition ease-in-out duration-150">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>
            </div>
          </div>
        </li>
      </ul>
    </Layout>
  );
}
