import React, { useReducer, useContext, createContext } from "react";
import useIsMobile from "../hooks/isMobile";
import useHeight from "../hooks/useHeight";

const StateContext = createContext();
const DispatchContext = createContext();

let initState = {
  view: "PRESENTATION",
  isPresentation: false,
  presentationIndex: 0,
  isMobile: false,
  height: 1024,
  slides: [],
};

export const SlideProvider = ({ children, slides, presentation }) => {
  const isMobile = useIsMobile();
  const height = useHeight();
  const [state, dispatch] = useReducer(Reducer, {
    ...initState,
    isMobile,
    slides,
  });

  React.useEffect(() => {
    dispatch({ type: "UPDATE", payload: { isMobile, height } });
  }, [isMobile]);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export const useSlideState = () => {
  const context = React.useContext(StateContext);
  if (context === undefined) {
    throw new Error("useSlideState must be used within a SlideProvider");
  }
  return context;
};

export const useSlideDispatch = () => {
  const context = React.useContext(DispatchContext);
  if (context === undefined) {
    throw new Error("useSlideDispatch must be used within a SlideProvider");
  }
  return context;
};

const Reducer = (state, action) => {
  let newState = { ...state };
  switch (action.type) {
    case "UPDATE": {
      newState = {
        ...state,
        ...action.payload,
      };
      break;
    }
  }

  return newState;
};
