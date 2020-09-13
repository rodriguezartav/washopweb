import React from "react";
import { Transition } from "@tailwindui/react";
import Link from "next/link";

export default function Sidebar(props) {
  const [formCart, setFormCart] = React.useState();

  React.useEffect(() => {
    if (props.cart) setFormCart(props.cart);
  }, [props.cart]);

  const updateItem = (product_id) => {
    return (field, value) => {
      const currentItem = formCart.lines.items.filter(
        (item) => item.product_id == product_id
      )[0];

      currentItem[field] = value;

      let newItems = [
        ...formCart.lines.items.filter((item) => item.product_id != product_id),
        currentItem,
      ];
      if (field == "amount" && value == 0)
        newItems = formCart.lines.items.filter(
          (item) => item.product_id != product_id
        );
      setFormCart({
        ...props.cart,
        lines: {
          items: newItems,
        },
      });
    };
  };

  const updateCart = (field, value) => {
    setFormCart({ ...formCart, [field]: value });
  };

  const onSave = () => {
    props.onSave(formCart);
  };

  return (
    <div
      className={`fixed z-50 inset-0 overflow-hidden ${
        props.cart ? "" : "hidden"
      }`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <section className="absolute inset-y-0 pl-10 max-w-full right-0 flex">
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
            show={props.cart != null}
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
                    <header className="space-y-1 py-6 px-4 bg-blue-800 sm:px-6">
                      <div className="flex items-center justify-between space-x-3">
                        <h2 className="text-lg leading-7 font-medium text-white">
                          Pedido{" "}
                          {formCart &&
                            formCart.phone.replace("whatsapp:+506", "")}
                        </h2>
                        <div className="h-7 flex items-center">
                          <button
                            onClick={props.onOpen}
                            aria-label="Close panel"
                            className="text-gray-50 hover:text-white transition ease-in-out duration-150"
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
                        <input
                          placeholder="Cedula de Facturación"
                          className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        />
                      </div>
                    </header>

                    <ul className=" ">
                      {formCart &&
                        formCart.lines.items.map((item) => {
                          return (
                            <li
                              key={item.producto_id}
                              className="col-span-1 bg-white rounded-lg shadow"
                            >
                              <div className="w-full flex items-center justify-between p-3 space-x-6">
                                <div className="flex-grow">
                                  <div className="flex items-center space-x-3">
                                    <span className="flex-shrink-0 inline-block px-2 py-0.5 text-teal-800 text-xs leading-4 font-medium bg-teal-100 rounded-full">
                                      {parseInt(item.price * 100) / 100} CRC
                                    </span>
                                  </div>
                                  <h3 className="text-gray-900 mt-2 uppercase text-sm leading-5 font-medium truncate">
                                    {item.name}
                                  </h3>
                                </div>
                                <div className="flex-shrink truncate w-16">
                                  <input
                                    onBlur={onSave}
                                    type="number"
                                    onChange={(e) => {
                                      updateItem(item.product_id)(
                                        "amount",
                                        parseFloat(e.currentTarget.value)
                                      );
                                    }}
                                    value={item.amount}
                                    className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                  />
                                </div>
                              </div>
                            </li>
                          );
                        })}
                    </ul>
                    <p className="text-xs text-center mx-auto">
                      Ingrese 0 para borrar un producto
                    </p>

                    <div className="p-4">
                      <div className="sm:col-span-3">
                        <label
                          htmlFor="last_name"
                          className="block text-sm font-medium leading-5 text-gray-700"
                        >
                          Direccion
                        </label>
                        <div className="mt-1 rounded-md shadow-sm">
                          <textarea
                            onChange={(e) => {
                              updateCart("address", e.currentTarget.value);
                            }}
                            onBlur={onSave}
                            value={name}
                            className="form-input block w-full transition
                            duration-150 ease-in-out sm:text-sm sm:leading-5"
                          ></textarea>
                        </div>
                      </div>
                      <div className="sm:col-span-3 mt-2">
                        <label
                          htmlFor="last_name"
                          className="block text-sm font-medium leading-5 text-gray-700"
                        >
                          Costo de Envio
                        </label>
                        <div className="mt-1 rounded-md shadow-sm">
                          <input
                            onBlur={onSave}
                            type="number"
                            onChange={(e) => {
                              updateCart(
                                "shipping_fee",
                                parseFloat(e.currentTarget.value)
                              );
                            }}
                            value={formCart.value || 0}
                            className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className=""></div>
                  <div className="flex-shrink-0 px-4 py-4 space-x-4 flex justify-start">
                    <a className="text-sm text-green-700 pt-2">
                      washop.fi/shop/{props.shop.id}/
                      {formCart.phone.replace("whatsapp:+506", "")}
                    </a>

                    <span className="inline-flex rounded-md shadow-sm">
                      <button
                        onClick={() => {
                          onSave();
                          window.open(
                            `https://wa.me/${formCart.phone.replace(
                              "whatsapp:+506",
                              ""
                            )}?text=En%20este%20link%20se%20puede%20ver%20el%20pedido%20http://washop.fi/${
                              props.shop.id
                            }/${formCart.phone.replace("whatsapp:+506", "")}`
                          );
                        }}
                        type="button"
                        className="py-2 px-4 border border-gray-300 bg-green-500 rounded-md text-sm leading-5 font-medium text-gray-50 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
                      >
                        WhatsApp
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            )}
          </Transition>
        </section>
      </div>
    </div>
  );
}
