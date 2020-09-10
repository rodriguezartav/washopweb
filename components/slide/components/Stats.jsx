import React from "react";
import Content from "./Content";
import Split from "./Split";
import Bullets from "./Bullets";
export default function testimony(props) {
  const renderTestimonial = () => {
    return (
      <div className="bg-red-700 flex h-full">
        <div className=" flex-initial self-center max-w-screen-xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10">
              Trusted by developers from over 80 planets
            </h2>
            <p className="mt-3 text-xl leading-7 text-red-200 sm:mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellendus repellat laudantium.
            </p>
          </div>
          <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
            <div className="flex flex-col">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-red-200">
                Pepperoni
              </dt>
              <dd className="order-1 text-5xl leading-none font-extrabold text-white">
                100%
              </dd>
            </div>
            <div className="flex flex-col mt-10 sm:mt-0">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-red-200">
                Delivery
              </dt>
              <dd className="order-1 text-5xl leading-none font-extrabold text-white">
                24/7
              </dd>
            </div>
            <div className="flex flex-col mt-10 sm:mt-0">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-red-200">
                Calories
              </dt>
              <dd className="order-1 text-5xl leading-none font-extrabold text-white">
                100k+
              </dd>
            </div>
          </dl>
        </div>
      </div>
    );
  };

  return (
    <div className="h-full ">
      {renderTestimonial()}
      {props.view == "LONGFORM" && <Content content={props.richText} />}
    </div>
  );
}
