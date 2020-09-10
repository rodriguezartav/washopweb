import React from "react";

export default function UserCart(props) {
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

  console.log(formCart);

  return (
    <div>
      <div className=" ">
        <div className="">
          <ul className="">
            {formCart &&
              formCart.lines.items.map((item, index) => {
                return (
                  <li key={index} className="bg-white rounded-lg shadow mb-4">
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
                  value={(formCart && formCart.address) || 0}
                  className="form-input block w-full transition
                            duration-150 ease-in-out sm:text-sm sm:leading-5"
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 px-4 py-4 space-x-4 flex justify-start">
          <span className="inline-flex rounded-md shadow-sm">
            <button
              onClick={props.onPay}
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-800 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
            >
              Pagar con Sinpe
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
