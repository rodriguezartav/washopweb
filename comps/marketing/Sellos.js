import React from "react";

export default function Sellos() {
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="uppercase text-gray-500 text-xl grid grid-cols-1 gap-8 md:grid-cols-6 lg:grid-cols-5">
          <div className="col-span-1 text-center text-green-50  bg-green-600 rounded-full p-5  justify-center md:col-span-2 lg:col-span-1">
            Garantizado!
            <br />
            <small className="lowercase">exitoso +90 </small>
          </div>
          <div className="col-span-1 text-center text-green-50  bg-blue-600 rounded-full p-5  justify-center md:col-span-2 lg:col-span-1">
            Seguro
            <br />
            <small className="lowercase">consolidado: +80 </small>
          </div>
          <div className="col-span-1 text-center text-gray-800  bg-yellow-200 rounded-full p-5  justify-center md:col-span-2 lg:col-span-1">
            Recomendado
            <br />
            <small className="lowercase">creciendo: +50 </small>
          </div>
          <div className="col-span-1 text-center text-green-50  bg-yellow-400 rounded-full p-5  justify-center md:col-span-2 lg:col-span-1">
            Riesgo Leve
            <br />
            <small className="lowercase">Empezando: +25 </small>
          </div>
          <div className="col-span-1 text-center text-green-50  bg-orange-500 rounded-full p-5  justify-center md:col-span-2 lg:col-span-1">
            Sin Verificar <br />
            <small className="lowercase">Nuevo: 0</small>
          </div>
        </div>
      </div>
    </div>
  );
}
