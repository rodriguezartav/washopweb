import React from "react";
import Bullets from "../Bullets";
import { useSlideState } from "data/SlideProvider";

export default function Imageless(props) {
  const { isPresentation, isMobile, height } = useSlideState();

  if (isPresentation) return <Presentation height={height} {...props} />;

  return (
    <div className="py-12 bg-gray-200">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="text-base leading-6 text-red-600 font-semibold tracking-wide uppercase">
            Transactions
          </p>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            A better way to send money
          </h3>
          <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>
        <div className="mt-10">
          <Bullets slide={props.slide} />
        </div>
      </div>
    </div>
  );
}

function Presentation(props) {
  return (
    <div className=" bg-gray-700 " style={{ height: props.height }}>
      <div className=" flex flex-row w-full h-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex-initial self-center w-full">
          <div className="grid grid-cols-3">
            <div>
              <p className="text-base leading-6 text-gray-50 font-semibold tracking-wide uppercase">
                {props.slide.source}
              </p>
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-50 sm:text-4xl sm:leading-10">
                {props.slide.title}
              </h3>
            </div>
            <div></div>
            <div>
              <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-50 ">
                {props.slide.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
