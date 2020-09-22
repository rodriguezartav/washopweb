import Head from "next/head";
import { useRouter } from "next/router";
import { useMutation, query, useFetch } from "data/Api";

import Layout from "views/Layout";
import Hero from "comps/marketing/Hero";
import Feature from "comps/marketing/Feature";
import Logos from "comps/marketing/Logos";
import Sellos from "comps/marketing/Sellos";
import Centros from "comps/marketing/Centros";
import Publicidad from "comps/marketing/Publicidad";
import Cta from "comps/marketing/Cta";
import Cta2 from "comps/marketing/Cta2";
import Faq from "comps/marketing/Faq";
import Footer from "comps/marketing/Footer";

export default function Home(props) {
  const router = useRouter();

  return (
    <Layout>
      <div className="relative bg-gray-50 overflow-hidden pb-20">
        <main className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
          <div className="text-center">
            <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
              Centros Comerciales
              <br className="xl:hidden" />{" "}
              <span className="text-blue-600">Electronicos</span>
            </h2>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Potencie las ventas por internet de sus asociados. Un centro de
              comercio electronico resuelve el mercadeo digital y brinda el
              respaldo necesario para crecer en internet.
            </p>
          </div>
        </main>
      </div>

      {/* This component requires Tailwind CSS >= 1.5.1 and @tailwindcss/ui >= 0.4.0 */}
      <div className="py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-base max-w-prose mx-auto lg:max-w-none">
            <p className="text-base leading-6 text-blue-600 font-semibold tracking-wide uppercase">
              Mercadeo, Publicidad y Finanzas
            </p>
            <h1 className="mt-2 mb-8 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Porque cuesta vender por internet?
            </h1>
          </div>
          <div className="relative z-10 text-base max-w-prose mx-auto mb-8 lg:max-w-5xl lg:mx-0 lg:pr-72">
            <p className="text-lg text-gray-500 leading-7">
              Abrir una tienda tradicional es dificil. Hay que llenarla de
              inventario, decorarla y contratar personal. Pasará algun tiempo
              mientras lleguen los primeros clientes.
            </p>

            <p className="text-lg text-gray-500 leading-7 mt-5">
              Lo bueno es que esos clientes pasaran frente a la tienda y con un
              buen rotulo y vitrina de productos ellos rapidamente lo conoceran.
              Con el tiempo las primeros clientes llegaran y ellos lo
              recomendaran con sus vecinos.
            </p>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
            <div className="relative z-10 mb-12 lg:mb-0">
              <div className="mb-10 prose text-gray-500 mx-auto lg:max-w-none">
                <p>
                  Ahora, si no hay una tienda por donde pasar enfrente - como
                  hacen los primeros clientes para conocer el comercio. Cuando
                  la calle tiene millones y millones de tiendas de todo el mundo
                  - como diferenciarse?
                </p>
                <ul>
                  <li>SEO - Search Engine Optimization. ( $100/hora )</li>
                  <li>
                    Publicidad Digital. ($0.22/1000 impresiones - $1 pay per
                    click)
                  </li>
                  <li>Mercadeo Digital via Email y SMS</li>
                </ul>
                <p>
                  Tener exito en internet requiere una nueva caja de
                  herramientas para complementar el instinto del comerciante.
                </p>
                <h2>
                  Los centros comerciales electronicos son ademas de las
                  herramientas, el experto que las opera.
                </h2>
              </div>
            </div>
            <div className="relative text-base max-w-prose mx-auto lg:max-w-none">
              <svg
                className="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
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
                  height={384}
                  fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)"
                />
              </svg>
              <blockquote className="relative bg-white rounded-lg shadow-lg">
                <div className="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                  <div className="relative text-lg text-gray-700 leading-7 font-medium mt-8">
                    <svg
                      className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="relative">
                      If you frequent a local coffee shop for example, they know
                      you personally. They might even have your coffee order
                      just the way you like it ready as you step up to the
                      counter. Why is that not happening on the web? Why can’t
                      we help businesses re-create that warm and fuzzy feeling
                      online
                    </p>
                  </div>
                </div>
                <cite className="flex items-center sm:items-start bg-blue-600 rounded-b-lg not-italic py-5 px-6 sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10">
                  <div className="rounded-full border-2 border-white mr-4 sm:-mt-15 sm:mr-6">
                    <img
                      className="w-12  sm:w-20 sm:h-20 rounded-full bg-blue-300"
                      src="/neil.png"
                      alt
                    />
                  </div>
                  <span className="text-blue-300 font-semibold leading-6">
                    <strong className="text-white font-semibold">
                      Neil Patel
                    </strong>{" "}
                    <br className="sm:hidden" />
                    Digtial Marketing Guru
                  </span>
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-base max-w-prose mx-auto lg:max-w-none">
            <p className="text-base leading-6 text-blue-600 font-semibold tracking-wide uppercase">
              Mercadeo, Publicidad y Finanzas
            </p>
            <h1 className="mt-2 mb-8 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Que es exactamente un centro comercial electronico?
            </h1>
          </div>
          <div className="relative z-10 text-base max-w-prose mx-auto mb-8 lg:max-w-5xl lg:mx-0 lg:pr-72">
            <p className="text-lg text-gray-500 leading-7">
              Amazón.com es un tipo de centro comercial electronico. Sin embargo
              Amazon.com es analogo a Wallmart o Pricemart.
            </p>

            <p className="text-lg text-gray-500 leading-7 mt-5">
              Los centros comerciales Wakket.com son analogos con Multiplaza.
              Que brinda un espacio donde los clientes saben que pueden obtener
              un nivel de servicio, confianza y respaldo.
            </p>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
            <div className="relative z-10 mb-12 lg:mb-0">
              <div className="mb-10 prose text-gray-500 mx-auto lg:max-w-none">
                <p>
                  Los centros comerciales wakket.com son grandes mercados web,
                  como Amazon.com - pero centrado en los comercios en vez de en
                  los productos. Cada comercio opera su propia tienda
                  independientemente.
                </p>

                <p>
                  El centro comercial electronico es la gran vitrina de
                  comercios - una pagina web donde estan las tienda electronicas
                  de todos sus afiliados. Cada tienda con sus productos y listos
                  para vender en linea.
                </p>

                <p>
                  La plataforma, sus productos e inquilinos son autosoportados
                  por la misma operacion de ventas de cada comerciante y
                  actualizados en tiempo real.
                </p>
              </div>
            </div>
            <div className="relative text-base max-w-prose mx-auto lg:max-w-none">
              <svg
                className="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
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
                  height={384}
                  fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* This component requires Tailwind CSS >= 1.5.1 and @tailwindcss/ui >= 0.4.0 */}
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div className="relative h-full text-lg max-w-prose mx-auto">
            <svg
              className="absolute top-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
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
                height={384}
                fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
              />
            </svg>
            <svg
              className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
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
                height={384}
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              />
            </svg>
            <svg
              className="absolute bottom-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
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
                height={384}
                fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
              />
            </svg>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto mb-6">
            <p className="text-base text-center leading-6 text-blue-600 font-semibold tracking-wide uppercase">
              Acuerdo de Entendimiento Version 1.0
            </p>
            <h1 className="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Centros Comerciales Electronicos
            </h1>
            <p className="text-xl text-gray-500 leading-8">
              Los centros comerciales electronicos agrupan los comercios
              electronicos wakket.com de sus afiliados bajo un mismo techo - con
              el respaldo y branding de su marca.
            </p>
          </div>
          <div className="prose prose-lg text-gray-500 mx-auto">
            <p>
              Los centros comerciales electronicos son operados por
              organizaciónes reconocidas y pueden incluir comercios previamente
              registrados así como registrar nuevos comercios - el control
              siempre lo tiene el propietario del centro comercial.
            </p>
            <p>
              El principal aporte del propietario del centro comercial
              electrónico es el repaldo de su marca sobre sus inquilinos.
              Tambien tiene la posiblidad de escoger su nivel de participación.
            </p>
            <p>
              Todas las funcionaes necesarias para la operación técnica y
              administrativa del centro comercial electronico son soportadas por
              Wakket.com. Los propietarios de los centros comerciales
              electronicos no requiren de inversion en publicidad ni recursos
              humanos para la operación.
            </p>
            <p>
              Los propietarios pueden incidir positiva y voluntariamente en las
              siguientes areas:
            </p>
            <ul>
              <li>Mercadeo y Publicidad del Centro Comercial Electronico</li>
              <li>
                Servicio al Cliente y Soporte de sus inquilinos electronicos.
              </li>
              <li>Administración del Centro Comercial Electónicos</li>
            </ul>
            <h2>Proceso de lanzamiento</h2>
            <p></p>
            <blockquote>
              <p>
                Un lanzamiento propulsado por una campaña publicitaria
                tradicional centrada en la bases de la cooperación y
                colaboración en tiempos de crisis aumenta proporcionalmente el
                exito del centro y sus inquilinos.
              </p>
            </blockquote>
            <p>
              El lanzamiento se puede ejecutar de dos maneras - el resultado
              siempre es el registro de vendedores digitales en su centro
              comercial electronico. Esto quiere decir que las empresas o
              personas que usted registra se muestran en su plataforma
            </p>
            <p>
              El proceso que su organización seleccione depende de sus
              capacidades tecnologicas y comerciales.{" "}
            </p>

            <p>
              La forma mas sencilla es utilizar sus propios medios para invitar
              a sus afiliados a registrarse en Wakket.com enviando un Whatsapp
              al whatsapp de su centro comercial (+1 800 444 3900)
            </p>

            <p>
              La forma recomenda es pre-registrar la información de sus
              afiliados en su Centro Comercial Electrónico y que de esta forma
              queden totalmente listos y validos con 80 de 100 puntos para
              realizar ventas en linea.
            </p>

            <p>
              <strong>
                Al utilizar la opción de pre-registro los comercios electronicos
                no requiren realizar pagos por inscripcion.
              </strong>
            </p>

            <h3>Costos Operativos</h3>
            <p>
              La operación de un centro comercial Wakket.com es gratuito
              mientras las ventas totales desde el lanzamiento de sus comercios
              sean inferiores a US$50,000.00. Una vez se alcance ese nivel de
              ventas totales se debera realizar un contrato por servicios o
              pasar a modo franquicia. La razón de este enunciado es que de
              tener este nivel de exito en ventas los costos operativos no
              podran ser sustentados por medio de publicidad interna en el
              mercado nacional y wakket.com podria tener problemas de flujo de
              caja.
            </p>

            <h3>Operación en modo franquicia</h3>
            <p>
              Luego de los primeros 6 meses de operación el propietario tendra
              la opción de adquirir la plataforma en modo franquicia y tener
              control completo del branding, direccion web y todos los demas
              componentes. De la misma forma, como todo emprendimiento nuevo, no
              se puede conocer ni garantizar la continuidad perpetua de la
              operación - por eso en caso de problemas de flujo de caja o
              comerciales se acuerda que Wakket.com le transfiera al propietario
              del centro comercial una franquicia operativa sin costos de
              licenciamiento en caso de poder continuar con el servicio.
            </p>

            <h3>Publicidad Digital</h3>
            <p>
              La plataforma Wakket.com se sustenta por medio de anuncios
              publicitarios a lo largo de la plataforma. Al utlizar la
              plataforma tanto los comercios como los centros comerciales
              aceptan las condiciones publicitarias de la platforma.
            </p>

            <p>
              Todos los Centros Comerciales Electronicos reciben bonificaciones
              en forma de publicidad que pueden utilizar como moneda de
              mercadeo.
            </p>

            <h3>Operación Legal</h3>
            <p>
              La plataforma Wakket.com opera utilizando la figura legal de
              Sociedad Anonima registrada en la Repulica de Panama - los cobros
              digitales se realizan por medio de la plataforma Paddle.com como
              Merchant of Registrar y se encarga de todas las relaciones
              fiscales y legales de la venta.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </Layout>
  );
}
