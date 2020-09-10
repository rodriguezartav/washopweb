import React from "react";

export default function Categories(props) {
  return (
    <div className="py-12 mx-auto max-w-screen-lg bg-white">
      <div className="lg:grid lg:grid-cols-2 lg:gap-10">
        {props.presentation.categories.map((item) => {
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
                  Competitive exchange rates
                </h5>
                <p className="mt-2 text-base leading-6 text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
