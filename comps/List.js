import React from "react";
import { useMutation } from "data/Api";

export default function List(props) {
  const [mutate, state] = useMutation("product/shop/" + props.shop.id);
  const [products, setProductos] = React.useState([]);
  React.useEffect(() => {
    props.version > 0 && mutate();
  }, [props.version]);

  React.useEffect(() => {
    if (state && state.data) setProductos(state.data);
    else if (props.products) setProductos(props.products);
  }, [props.products, state.data]);

  return (
    <React.Fragment>
      {props.isAdmin && (
        <span class="inline-flex my-2  rounded-md shadow-sm">
          <button
            onClick={props.onCreate}
            type="button"
            class="inline-flex w-full items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
          >
            Crear Producto
          </button>
        </span>
      )}

      <ul className="">
        {products.map((item) => {
          return (
            <li
              key={item.id}
              onClick={props.onSelect(item)}
              className="mb-5 bg-white rounded-lg shadow"
            >
              <div className="w-full flex items-center justify-between p-3 space-x-6">
                <div className="flex-1 truncate">
                  <div className="flex items-center space-x-3">
                    <span className="flex-shrink-0 inline-block px-2 py-0.5 text-teal-800 text-xs leading-4 font-medium bg-teal-100 rounded-full">
                      {parseInt(item.price * 100) / 100} CRC
                    </span>
                  </div>
                  <h3 className="text-gray-900 mt-2 uppercase text-sm leading-5 font-medium truncate">
                    {item.name}
                  </h3>
                </div>
                <img
                  className="w-10 h-10 object-cover bg-gray-300 rounded-full flex-shrink-0"
                  src={item.image}
                  alt
                />
              </div>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
}
