import React from "react";
import Bullets from "../Bullets";
import { useSlideState } from "data/SlideProvider";

export default function Textless(props) {
  const { isPresentation, isMobile, height } = useSlideState();

  if (isPresentation) return <Presentation height={height} {...props} />;

  return (
    <div className="bg-gray-50 h-full overflow-hidden">
      <div className="relative max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <svg
          className="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
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
            height={784}
            fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"
          />
        </svg>
        <div className="relative lg:grid lg:grid-cols-3 lg:col-gap-8">
          <div className="lg:col-span-1">
            <h3 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              {props.slide.title}
            </h3>
          </div>
          <div className="mt-10 sm:grid sm:grid-cols-2 sm:col-gap-8 sm:row-gap-10 lg:col-span-2 lg:mt-0">
            {props.slide.bullets.map((item) => {
              return (
                <div>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
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
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                  <div className="mt-5">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function Presentation(props) {
  return (
    <div className="bg-gray-50 h-full overflow-hidden">
      <div className="relative flex flex-row h-full  max-w-screen-lg mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col items-center flex-initial self-center h-full w-full lg:grid lg:grid-cols-2 lg:col-gap-8">
          <div className="lg:col-span-1">
            <h3 className="text-3xl h-full  leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              {props.slide.title}
            </h3>
          </div>
          <div className="mt-10 flex flex-col items-center sm:grid sm:grid-cols-1 sm:col-gap-8 sm:row-gap-10 lg:col-span-1 lg:mt-0">
            {props.slide.bullets.map((item) => {
              return (
                <div>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
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
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                  <div className="mt-5">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
