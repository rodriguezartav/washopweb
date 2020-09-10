import React from "react";
import { Transition } from "@tailwindui/react";
import { useMutation } from "data/Api";
import Photo from "./Photo";

export default function Sidebar(props) {
  const [email, setEmail] = React.useState("");
  const [mutate, state] = useMutation("product/upsert");
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [image, setImage] = React.useState("");

  React.useEffect(() => {
    if (props.product) {
      setName(product.name);
      setPrice(product.price);
      setImage(product.image);
    }
  }, [props.product]);

  React.useEffect(() => {
    if (state.success) {
      props.onProductUpdated();
    }
  }, [state]);

  const onUpdateImage = (url) => {
    setImage(url);
  };

  const onSend = async () => {
    const p = { name, price, image, shop_id: props.shop.id };
    if (props.product && props.product.id) p.id = props.product.id;
    await mutate(p);
    setName("");
    setPrice("");
    setImage("");
  };

  return (
    <div
      className={`fixed z-50 inset-0 overflow-hidden ${
        props.open ? "" : "hidden"
      }`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <section className="absolute inset-y-0 pl-16 max-w-full right-0 flex">
          {/*
  Slide-over panel, show/hide based on slide-over state.

  Entering: "transform transition ease-in-out duration-500 sm:duration-700"
    From: "translate-x-full"
    To: "translate-x-0"
  Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
    From: "translate-x-0"
    To: "translate-x-full"
*/}

          <Transition
            show={props.open || false}
            enter="transform transition ease-in-out duration-500 sm:duration-700"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-500 sm:duration-700"
            leaveFrom="translate-x-0"
            leaveTo="ranslate-x-full"
          >
            {(ref) => (
              <div ref={ref} className="w-screen max-w-md">
                <div className="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl">
                  <div className="flex-1 h-0 overflow-y-auto">
                    <header className="space-y-1 py-6 px-4 bg-indigo-800 sm:px-6">
                      <div className="flex items-center justify-between space-x-3">
                        <h2 className="text-lg leading-7 font-medium text-white">
                          Productos
                        </h2>
                        <div className="h-7 flex items-center">
                          <button
                            onClick={props.onOpen}
                            aria-label="Close panel"
                            className="text-burlywood-200 hover:text-white transition ease-in-out duration-150"
                          >
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
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm leading-5 text-gray-300">
                          En esta seccion puede darle mantenimiento a sus
                          productos
                        </p>
                      </div>
                    </header>

                    <div className="p-3">
                      <div className="sm:col-span-3">
                        <label
                          htmlFor="last_name"
                          className="block text-sm font-medium leading-5 text-gray-700"
                        >
                          Nombre
                        </label>
                        <div className="mt-1 rounded-md shadow-sm">
                          <input
                            onChange={(e) => {
                              setName(e.currentTarget.value);
                            }}
                            value={name}
                            className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-3 mt-2">
                        <label
                          htmlFor="last_name"
                          className="block text-sm font-medium leading-5 text-gray-700"
                        >
                          Precio
                        </label>
                        <div className="mt-1 rounded-md shadow-sm">
                          <input
                            type="number"
                            onChange={(e) => {
                              setPrice(parseFloat(e.currentTarget.value));
                            }}
                            value={price}
                            className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                          />
                        </div>
                      </div>

                      <label
                        htmlFor="photo"
                        className="block  mt-4 text-sm leading-5 font-medium text-gray-700"
                      >
                        Photo (opcional)
                      </label>
                      <div className="mt-2 flex items-center">
                        <Photo
                          url={image}
                          onChange={(url) => {
                            setImage(url);
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {!state.loading && (
                    <div className="flex-shrink-0 px-4 py-4 space-x-4 flex justify-end">
                      <span className="inline-flex rounded-md shadow-sm">
                        <button
                          onClick={props.onOpen}
                          type="button"
                          className="py-2 px-4 border border-gray-300 rounded-md text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
                        >
                          Cancel
                        </button>
                      </span>
                      <span className="inline-flex rounded-md shadow-sm">
                        <button
                          onClick={onSend}
                          type="submit"
                          className="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-800 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                        >
                          Guardar
                        </button>
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </Transition>
        </section>
      </div>
    </div>
  );
}
