import React from "react";
import { useSlideState } from "data/SlideProvider";

export default function Split(props) {
  const { isPresentation, isMobile } = useSlideState();

  const size = props.size || 6;
  const [displayLeft, setDisplayLeft] = React.useState(true);
  const timmer = React.useRef();
  const display = React.useRef(displayLeft);

  React.useEffect(() => {
    timmer.current = setTimeout(() => {
      setDisplayLeft(!display.current);
      display.current = !display.current;
    }, 5000);
    return () => {
      clearInterval(timmer.current);
    };
  }, []);

  const renderLeft = () => {
    return (
      <div
        className={`lg:flex-initial ${
          isPresentation ? "h-screen" : ""
        }  lg:w-${size}/12 flex  `}
      >
        <div className="self-center h-full flex-1 ">
          {props.children.filter((item) => item)[0]}
        </div>
      </div>
    );
  };

  const renderRight = () => {
    return (
      <div
        className={` lg:flex-initial flex h-full lg:w-${12 - size}/12 ${
          isPresentation ? "h-screen items-center" : ""
        } `}
      >
        {props.children.filter((item) => item)[1]}
      </div>
    );
  };

  const renderLogic = () => {
    if (isPresentation && isMobile) {
      return displayLeft ? renderLeft() : renderRight();
    }

    return (
      <React.Fragment>
        {renderLeft()}
        {renderRight()}
      </React.Fragment>
    );
  };

  return (
    <div className="">
      <main className=" justify-center lg:flex ">{renderLogic()}</main>
    </div>
  );
}
