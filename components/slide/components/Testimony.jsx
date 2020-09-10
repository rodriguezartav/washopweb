import React from "react";
import Split from "./Split";
import Bullets from "./Bullets";

import { useSlideState } from "data/SlideProvider";

export default function Testimony(props) {
  const { isPresentation, isMobile } = useSlideState();

  const renderTitle = () => {
    return (
      <div className={`${isPresentation && isMobile ? "" : "py-6"} bg-white`}>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p
              className={`${
                isPresentation && isMobile ? "hidden" : ""
              }  sm:visible text-base leading-6  text-red-600 font-semibold tracking-wide uppercase`}
            >
              Transactions
            </p>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              A better way to send money
            </h3>
            <p
              className={`${
                isPresentation && isMobile ? "hidden" : ""
              } mt-4  max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto`}
            >
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </p>
          </div>
        </div>
      </div>
    );
  };

  let Wrapper = (props) => {
    return props.children;
  };

  if (isPresentation) Wrapper = Split;

  return (
    <div>
      <div className="grid grid-cols-5 ">
        <div className="bg-red-700">
          <div className="flex items-center h-full">
            <div className="flex-initial w-full self-center">
              <div className="flex flex-col ">
                <div className="flex-initial self-center">
                  <img
                    className="border h-32 w-32 block shadow-2xl flex-initial self-center rounded-full xl:h-44 xl:w-44    inset-0 mx-auto"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt
                  />
                </div>
                <div className="flex-initial w-full self-center px-10">
                  <div className="relative ">
                    <blockquote className="relative">
                      <div className="text-xl leading-9 font- text-gray-900"></div>
                      <footer className="mt-8">
                        <div className="">
                          <div className="w-fill">
                            <div className="text-base text-center leading-6 font-medium text-gray-50">
                              Judith Black
                            </div>
                            <div className="text-base text-center leading-6 font-medium text-red-50">
                              CEO, Tuple
                            </div>
                          </div>
                        </div>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-10 col-span-2">
          {renderTitle()}
          <img src={props.slide.image.url} />
        </div>
        <div className="px-10 h-full col-span-2 flex flex-row">
          <div className="flex-initial self-center">
            <Bullets slide={props.slide} />
          </div>
        </div>
      </div>
    </div>
  );
}
