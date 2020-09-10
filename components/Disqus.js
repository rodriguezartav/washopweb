import React from "react";
import { query as api } from "data/Api";
import { useNotify, useGlobalState } from "data/Visitor/Context";
import { useAction, useMutate } from "data/Visitor/Context";
import { registerVisitor } from "data/Visitor/Actions";
import Notify from "twilio/lib/rest/Notify";

export default function Disqus(props) {
  const [nofify] = useNotify();
  const { visitor } = useGlobalState();
  const [number, setNumber] = React.useState("");
  const [message, setMessage] = React.useState("");

  const [, { loading }] = useAction(registerVisitor);

  const [
    comment,
    { loading: loadingComment, loaded: mutateLoaded },
  ] = useMutate("visitors/comment");

  const [like, { loading: loadingLike, loaded: loadedLike }] = useMutate(
    "visitors/comment"
  );

  const sendMessage = async () => {
    comment({ comment: message, visitor, url: window.location.pathname }).then(
      () => {
        nofify("Se envio el mensaje", "green");
      }
    );
  };

  const onLike = async () => {
    if (loadedLike) return;
    like({ isLike: true, visitor, url: window.location.pathname });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    register({ phone: number });
  };

  const sent = () => {
    return (
      <section className="py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24">
        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <blockquote className="mt-8">
              <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
                <p>
                  <span className="text-red-600">He recibido su mensaje.</span>

                  <br />
                </p>
                <span className="text-gray-400">
                  Esta forma de pasar de web a whatsapp es parte del contact
                  center multicanal, es muy comodo. Nos hablamos por allá.
                </span>
              </div>
              <footer className="mt-8">
                <div className="md:flex md:items-center md:justify-center">
                  <div className="md:flex-shrink-0"></div>
                  <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                    <div className="text-base leading-6 font-medium text-gray-900">
                      Roberto Rodriguez
                    </div>
                    <svg
                      className="hidden md:block mx-1 h-5 w-5 text-indigo-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M11 0h3L9 20H6l5-20z" />
                    </svg>
                    <div className="text-base leading-6 font-medium text-gray-500">
                      Director, RodríguezLab
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
    );
  };

  const renderMessage = () => {
    return (
      <div className="mt-10">
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-5 text-gray-700"
        >
          Comentario Privado
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <textarea
            value={message}
            onChange={(e) => {
              setMessage(e.currentTarget.value);
            }}
            className="form-input block w-full sm:text-sm sm:leading-5"
            aria-describedby="message-description"
          ></textarea>
        </div>
        <p className="mt-2 text-sm text-gray-500" id="message-description">
          Su opinión es muy importante para mí
        </p>

        <div class="mt-6">
          <span class="block w-full rounded-md shadow-sm">
            {!loadingComment && (
              <button
                onClick={sendMessage}
                class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-500 focus:outline-none focus:border-orange-700 focus:shadow-outline-orange active:bg-orange-700 transition duration-150 ease-in-out"
              >
                Enviar por WhatsApp
              </button>
            )}
          </span>
        </div>
      </div>
    );
  };

  const renderForm = () => {
    return (
      <React.Fragment>
        Registrese para tener acceso completo al laboratorio, recibir links a
        nuevas publicaciones y al foro de ayuda comunitario. ( 0-spam )
        <form
          onSubmit={onSubmit}
          className="mt-8 sm:flex"
          aria-labelledby="newsletter-headline"
        >
          <input
            aria-label="Phone"
            type="number"
            value={number}
            onChange={(e) => {
              setNumber(e.currentTarget.value);
            }}
            required
            className="appearance-none w-full px-5 py-3 border border-gray-300 text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out sm:max-w-xs"
            placeholder="Ingrese su whatsapp"
          />
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <button
              disabled={loading}
              className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-500 hover:bg-green-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            >
              Whatsapp
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  };

  if (mutateLoaded) return sent();

  return (
    <div className="bg-white mb-16">
      <div className="max-w-xl mx-auto ">
        <div className="flex">
          <h2 className="flex-initial mr-10 text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Que le parecio el artículo?
          </h2>

          {!loadingLike && (
            <svg
              onClick={onLike}
              class={` cursor-pointer flex-initial h-12 w-12 text-${
                loadedLike ? "red" : "gray"
              }-500`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
              />
            </svg>
          )}
        </div>
        {visitor && visitor.phone && renderMessage()}
        {(!visitor || !visitor.phone) && renderForm()}
      </div>
    </div>
  );
}
