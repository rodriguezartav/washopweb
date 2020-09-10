import React from "react";

export default function Angle(props) {
  const [videoOn, setVideoOn] = React.useState(false);

  const onVideo = () => {
    setVideoOn(true);
    props.onVideo && props.onVideo();
  };

  const onShort = () => {
    setVideoOn(true);
    props.onVideo && props.onVideo(true);
  };

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mt-0 mx-auto max-w-screen-xl px-4 sm:mt-0 sm:px-6 md:mt-0 lg:mt-20 lg:px-8 xl:mt-0">
            <div className="sm:text-center lg:text-left pt-20">
              <p className="text-gray-500">
                {props.parent && props.parent.sys.publishedAt.split("T")[0]}
              </p>
              <h2 className="text-4xl  tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                {props.titleBlack}
                <br />
                <span className="text-red-600 pl-1">{props.titleColor}</span>
              </h2>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                {props.text}
              </p>
              <div className="mt-0 sm:mt-2 sm:flex sm:justify-center lg:justify-start">
                {/* On: "bg-indigo-600", Off: "bg-gray-200" */}
                {props.hasVideo && (
                  <React.Fragment>
                    <span className="text-red-500 text-md uppercase font-medium">
                      Video
                    </span>
                    <span
                      onClick={onVideo}
                      role="checkbox"
                      tabIndex={0}
                      aria-checked="false"
                      className="ml-3 bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline"
                    >
                      {/* On: "translate-x-5", Off: "translate-x-0" */}
                      <span
                        aria-hidden="true"
                        className="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200"
                      />
                    </span>
                  </React.Fragment>
                )}
                {props.callToAction && (
                  <div className="rounded-md shadow">
                    <a
                      onClick={() => {
                        props.onShowModule(props.callToAction.name);
                      }}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                    >
                      {props.callToAction.title}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
      <div
        onClick={onShort}
        className="lg:absolute  lg:inset-y-0 lg:right-0 lg:w-1/2 "
      >
        {props.hasShortVideo && (
          <img
            src="/videoIcon.png"
            className="h-16"
            className="absolute opacity-50  hover:opacity-100 top-6/12 left-6/12"
          />
        )}

        {props.image && (
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-9/12"
            src={props.image}
            alt
          />
        )}
        {!props.image && (
          <img
            className=" w-3/4 ml-20 pl-28 h-full object-fill"
            src="/logo3.svg"
          />
        )}
        {props.hasShortVideo && (
          <div className=" text-center text-xs uppercase text-red-700">
            Resumen de 25 segundos disponible
          </div>
        )}
      </div>
    </div>
  );
}
