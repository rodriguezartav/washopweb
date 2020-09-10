import React from "react";
import Bullets from "../Bullets";
import { useSlideState } from "data/SlideProvider";

export default function Titleless(props) {
  const { isPresentation, isMobile, height } = useSlideState();

  if (isPresentation) return <Presentation height={height} {...props} />;

  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-screen-xl lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
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
                  <h5 className="text-lg leading-6 font-medium text-gray-900">
                    {item.title}
                  </h5>
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
  );
}

function Presentation(props) {
  return (
    <div className="h-full ">
      <div className=" h-full   sm:px-6 ">
        <div className="lg:grid  h-full  lg:grid-cols-2 lg:gap-8">
          <div className="bg-red-800  flex flex-row items-center h-full ">
            <h3 className="text-3xl mx-auto w-3/4 leading-9 font-extrabold tracking-tight text-gray-50 sm:text-4xl sm:leading-10">
              {props.slide.title}
            </h3>
          </div>
          <div className="flex flex-row">
            <div className="self-center flex-initial">
              {props.slide.bullets.map((item, index) => {
                return (
                  <div className={` ml-10 ${index == 0 ? "" : "mt-15"} `}>
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
                      <h5 className="text-lg leading-6 font-medium text-gray-900">
                        {item.title}
                      </h5>
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
    </div>
  );
}
