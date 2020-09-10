import React from "react";
import { useSlideState } from "data/SlideProvider";

export default function Bullets(props) {
  const { isPresentation, isMobile } = useSlideState();
  const slide = props.slide || {};
  let { bullets } = props.slide;
  if (!bullets) bullets = [];

  const icons = [
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
    </svg>,
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
        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
      />
    </svg>,
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
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>,
  ];

  const renderBullets = () => {
    return (
      <div className="mt-10">
        <ul
          className={`pl-0 sm:pl-2 md:grid ${
            bullets.length == 4 && !slide.image
              ? "md:grid-cols-2 md:col-gap-8 md:row-gap-10"
              : "md:grid-cols-1 md:w-11/12 md:mx-auto md:col-gap-2 md:row-gap-2"
          } `}
        >
          {bullets.map((bullet, index) => {
            {
              return renderBullet(bullet, index);
            }
          })}
        </ul>
      </div>
    );
  };

  const renderBullet = (bullet, index) => {
    return (
      <li
        key={index}
        className={` ${
          isPresentation && isMobile ? "mt-10" : "mt-10 "
        } first:mt-0 ${index != 0 && "md:mt-5"}`}
      >
        <div className="flex">
          <div className="flex-shrink-0">
            <div
              className={`flex items-center justify-center h-8 w-8 md:h-12 md:w-12 rounded-md bg-red-500 text-white`}
            >
              <svg
                className="h-4 w-4 md:h-6 md:w-6"
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
          </div>
          <div className="ml-4 overflow-hidden">
            <h4
              className={` ${
                isPresentation && isMobile ? "mt-1" : ""
              } text-lg leading-6 font-medium text-gray-900`}
            >
              {bullet.title}
            </h4>
            <p
              className={`${isPresentation ? "truncate" : ""}
              
              ${isPresentation && isMobile ? "hidden" : ""}
              mt-2 text-base leading-6 text-gray-500`}
            >
              {bullet.text}
            </p>
          </div>
        </div>
      </li>
    );
  };

  return renderBullets();
}
