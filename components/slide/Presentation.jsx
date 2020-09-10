import react from "react";

import { useRouter } from "next/router";

import {
  Content,
  Hero,
  ImageSplit,
  Stats,
  Image,
  Testimony,
  Timeline,
  Video,
  Divider,
  Categories,
} from "./components";

import Intro from "components/hero/Angle";

const map = {
  Hero,
  Image,
  ImageSplit,
  Stats,
  Testimony,
  Timeline,
  Divider,
  Video,
  Content,
};

import {
  SlideProvider,
  useSlideState,
  useSlideDispatch,
} from "data/SlideProvider";

export default function Wrapper(props) {
  const dispatch = useSlideDispatch();
  const { isPresentation, presentationIndex, height, slides } = useSlideState();

  const [visibleModules, setVisibleModules] = React.useState({});

  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    setCategories(props.categories);
  }, [props.categories]);

  const onStartPresentation = () => {
    dispatch({ type: "UPDATE", payload: { isPresentation: !isPresentation } });
  };

  const next = () => {
    dispatch({
      type: "UPDATE",
      payload: { presentationIndex: presentationIndex + 1 },
    });
  };

  const last = () => {
    dispatch({
      type: "UPDATE",
      payload: { presentationIndex: presentationIndex - 1 },
    });
  };

  const renderControls = () => {
    return (
      <div className="bg-red-50 lg:flex lg:items-center lg:justify-between p-2">
        <div className="flex-1 min-w-0">
          <p className="text-gray-50"> {props.presentation.text}</p>
        </div>
        <div className="mt-5 flex lg:mt-0 lg:ml-4">
          <span className="hidden sm:block shadow-sm rounded-md">
            <button
              onClick={last}
              type="button"
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 transition duration-150 ease-in-out"
            >
              <svg
                className="-ml-1 mr-2 h-5 w-5 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
              Edit
            </button>
          </span>
          <span className="hidden sm:block ml-3 shadow-sm rounded-md">
            <button
              onClick={next}
              type="button"
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
            >
              <svg
                className="-ml-1 mr-2 h-5 w-5 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                  clipRule="evenodd"
                />
              </svg>
              View
            </button>
          </span>
          <span className="sm:ml-3 shadow-sm rounded-md">
            <button
              onClick={onStartPresentation}
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 transition duration-150 ease-in-out"
            >
              <svg
                className="-ml-1 mr-2 h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Iniciar Presentacion
            </button>
          </span>
          {/* Dropdown */}
          <span className="ml-3 relative shadow-sm rounded-md sm:hidden">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out"
              id="mobile-menu"
              aria-haspopup="true"
            >
              More
              <svg
                className="-mr-1 ml-2 h-5 w-5 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {/*
Dropdown panel, show/hide based on dropdown state.

Entering: "transition ease-out duration-200"
From: "transform opacity-0 scale-95"
To: "transform opacity-100 scale-100"
Leaving: "transition ease-in duration-75"
From: "transform opacity-100 scale-100"
To: "transform opacity-0 scale-95"
*/}
            <div
              className="origin-top-right absolute right-0 mt-2 -mr-1 w-48 rounded-md shadow-lg"
              aria-labelledby="mobile-menu"
              role="menu"
            >
              <div className="py-1 rounded-md bg-white shadow-xs">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                  role="menuitem"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                  role="menuitem"
                >
                  View
                </a>
              </div>
            </div>
          </span>
        </div>
      </div>
    );
  };

  const renderComponent = (slide) => {
    const Component = map[slide.type];
    return <Component type={2} slide={slide} />;
  };

  return (
    <React.Fragment>
      {!isPresentation && renderControls()}

      <Intro presentation={props.presentation} />
      <Categories presentation={props.presentation} />

      <div className="relative py-0 bg-white overflow-hidden">
        <div className="hidden lg:block  lg:inset-y-0 "></div>

        <div className="">
          {isPresentation && (
            <div>
              <div className="grid grid-cols-12 gap-6">
                <div
                  style={{ height: height }}
                  className="col-span-9 rounded-lg  border-cool-gray-50 border-4"
                >
                  {renderComponent(props.slides[presentationIndex])}
                </div>
                <div className="col-span-3  flex items-center">
                  <div className=" border-2 border-gray-100 w-full flex-initial">
                    <video
                      className="  rounded-lg  border-cool-gray-700 border-4"
                      src="/ScreenFlow1.webm"
                      autoPlay="true"
                      loop="true"
                    />
                  </div>
                </div>
              </div>
              {renderControls()}
            </div>
          )}

          {!isPresentation &&
            props.slides.map((slide, index) => {
              return (
                <React.Fragment>
                  {renderComponent(slide)}
                  <Content content={slide.richText} />
                </React.Fragment>
              );
            })}
        </div>
      </div>
    </React.Fragment>
  );
}
