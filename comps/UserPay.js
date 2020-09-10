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
    <div>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Pago por Sinpe
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
            Para asegurar su compra, WaShop custodia su dinero mientras la
            tienda realiza el envio.
            <br /> <br /> Luego contra Factura Electronica o Recibo de Envio se
            transfiere el pago a la tienda.
          </p>
        </div>

        <div className="px-4 py-5 sm:p-0">
          <dl>
            <div className="mt-0 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
              <dt className="text-sm leading-5 font-medium text-gray-500">
                Realice un Sinpe Movil a WaShop
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                +506 84191862
              </dd>
            </div>

            <div className="mt-5 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
              <dt className="text-sm leading-5 font-medium text-gray-500">
                Por el monto:
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                45,333.33 CRC
              </dd>
            </div>

            <div className="mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
              <dt className="text-sm leading-5 font-medium text-gray-500">
                Estado
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                Esperando Pago
              </dd>
            </div>
          </dl>
        </div>
        <div className="px-4 pb-5 border-b border-gray-200 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Seguimiento del Envio
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
            En esta misma pagina podra ver el estado del envio. Simplemente
            recargue la pagina.
          </p>
          <dl>
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
              <dt className="mt-8 text-sm leading-5 font-medium text-gray-500">
                Transporte
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                Pendiente
              </dd>
            </div>

            <div className="mt-5 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
              <dt className="text-sm leading-5 font-medium text-gray-500">
                Referencia
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                -
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
