import React from "react";
import { useSlideState } from "data/SlideProvider";

export default function Divider(props) {
  const { isPresentation, isMobile, height } = useSlideState();

  if (isPresentation) return <Presentation height={height} {...props} />;

  return (
    <div className=" bg-red-700 ">
      <div className="  py-16 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="">
          <div>
            <p className="text-base leading-6 text-gray-50 font-semibold tracking-wide uppercase">
              {props.slide.title}
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
  );
}

function Presentation(props) {
  return (
    <div className=" bg-red-700 " style={{ height: props.height }}>
      <div className=" flex flex-row w-full h-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex-initial self-center w-full">
          <div className="grid grid-cols-3">
            <div>
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
