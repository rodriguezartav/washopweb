import React from "react";

export default function Faq() {
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto pt-12 pb-16 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:pt-20 lg:pb-28 lg:px-8">
        <h2 className="text-3xl leading-9 font-extrabold text-gray-900">
          Frequently asked questions
        </h2>
        <div className="mt-6 border-t-2 border-gray-100 pt-10">
          <dl className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Que es Wakket?
                </dt>
                <dd className="mt-2">
                  <p className="text-base leading-6 text-gray-500">
                    Es un servicio digital que permite la administración
                    profesional de ventas a travez telefonos celulares.
                  </p>
                </dd>
              </div>
              <div className="mt-12">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Quienes pueden usar Wakket?
                </dt>
                <dd className="mt-2">
                  <p className="text-base leading-6 text-gray-500">
                    Realmente todo el mundo, todo se hace atravez de WhatsApp y
                    como todo el mundo puede usar Whatsapp...
                  </p>
                </dd>
              </div>
              <div className="mt-12">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Wakket es solo para empresas?
                </dt>
                <dd className="mt-2">
                  <p className="text-base leading-6 text-gray-500">
                    Wakket es para todo el mundo. Se pueden usar individualmente
                    como por ejemplo artesanos, cerrajeros. Empresa pequeña como
                    tiendas y ferreterias o equipos de venta regionales de
                    empresas medianas. Uselo incluso para vender articulos
                    usados o grupos de trueque.
                  </p>
                </dd>
              </div>
            </div>
            <div className="mt-12 md:mt-0">
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Como puede una empresa usa Wakket?
                </dt>
                <dd className="mt-2">
                  <p className="text-base leading-6 text-gray-500">
                    Wakket es personal, al igual que Whatsapp. Sin embargo el
                    representante legal de una empresa puede escoger un grupo de
                    vendedores y entre ellos compartir clientes y productos.
                  </p>
                </dd>
              </div>
              <div className="mt-12">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Cuanto cuesta Wakket realmente?
                </dt>
                <dd className="mt-2">
                  <p className="text-base leading-6 text-gray-500">
                    Wakket no cuesta nada. Cero, zip. Nada. Los cobros iniciales
                    se realizan para validar la cedula contra una cuenta
                    bancaria.
                  </p>
                </dd>
              </div>
              <div className="mt-12">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Entonces como se mantiene?
                </dt>
                <dd className="mt-2">
                  <p className="text-base leading-6 text-gray-500">
                    Wakket es un Marketplace donde vendedores y compradores se
                    reunen. Wakket es un negocio de mercadeo y publicidad y sus
                    ingresos vienen de franquicias, anuncios y patrocinios.
                  </p>
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
