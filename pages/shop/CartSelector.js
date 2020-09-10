import React from "react";
import { useFetch, useMutation } from "data/Api";

export default function CartSelector(props) {
  const [phone, setPhone] = React.useState("");
  const [carts, setCarts] = React.useState([]);
  const [mutate, state] = useMutation("cart/create");

  const [response, loading, hasError] = useFetch("cart");

  React.useEffect(() => {
    if (response)
      setCarts(response.filter((item) => item.phone.indexOf(phone) > -1));
  }, [phone]);

  React.useEffect(() => {
    setCarts(response || []);
  }, [response]);

  React.useEffect(() => {
    if (state.success) {
      setPhone("");
      props.onSelectCart(state.data)();
    }
  }, [state]);

  const onCreateCart = () => {
    mutate({ phone, shop_id: props.shop.id });
  };

  if (!props.product) return null;
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-start  justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/*
Background overlay, show/hide based on modal state.

Entering: "ease-out duration-300"
  From: "opacity-0"
  To: "opacity-100"
Leaving: "ease-in duration-200"
  From: "opacity-100"
  To: "opacity-0"
    */}
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75" />
        </div>
        {/* This element is to trick the browser into centering the modal contents. */}
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" />​
        {/*
Modal panel, show/hide based on modal state.

Entering: "ease-out duration-300"
  From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
  To: "opacity-100 translate-y-0 sm:scale-100"
Leaving: "ease-in duration-200"
  From: "opacity-100 translate-y-0 sm:scale-100"
  To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    */}
        <div
          style={{
            height: "calc( 100vh - 120px )",
            width: "calc( 100vw - 80px )",
          }}
          className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
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

          <div>
            <div className="mt-3 text-center sm:mt-5">
              <div className="mt-2">
                <p className="text-sm leading-5 text-gray-500">
                  Agregar Producto al pedido
                </p>
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-headline"
                >
                  {props.product.name}
                </h3>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last_name"
                className="block text-sm mt-5 font-medium leading-5 text-gray-700"
              >
                Crear Pedido
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  placeholder="Ingrese un whatsapp"
                  type="number"
                  onChange={(e) => {
                    setPhone(e.currentTarget.value);
                  }}
                  value={phone}
                  className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>
            {carts.length == 0 && phone && phone.length > 7 && (
              <div className="mt-5 sm:mt-6">
                <span className="flex w-full rounded-md shadow-sm">
                  <button
                    onClick={onCreateCart}
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigo-800 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                  >
                    Crear Pedido
                  </button>
                </span>
              </div>
            )}

            <label
              htmlFor="last_name"
              className="block text-sm mt-5 font-medium leading-5 text-gray-700"
            >
              Escoger un pedido
            </label>
            <ul
              style={{ height: 300 }}
              className="grid scrolling-touch scrolling-auto overflow-scroll grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {carts.map((item) => {
                return (
                  <li
                    onClick={props.onSelectCart(item)}
                    className="col-span-1 bg-white rounded-lg shadow"
                  >
                    <div className="w-full flex items-center justify-between p-3 space-x-6">
                      <div className="flex-1 truncate">
                        <div className="flex items-center space-x-3">
                          <span className="flex-shrink-0 inline-block px-2 py-0.5 text-teal-800 text-xs leading-4 font-medium bg-teal-100 rounded-full">
                            {parseInt(item.total * 100) / 100} CRC
                          </span>
                        </div>
                        <h3 className="text-gray-900 mt-2 uppercase text-sm leading-5 font-medium truncate">
                          {item.phone.replace("whatsapp:+506", "")}
                        </h3>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
