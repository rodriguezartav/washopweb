import { query as api, useFetch, useMutation } from "../Api";

//var mixpanel = require("mixpanel-browser");

export const load = (dispatch, iniState) => {
  if (window && window.localStorage && window.localStorage.getItem("store")) {
    const state = JSON.parse(
      window.localStorage.getItem("store") || JSON.stringify(iniState)
    );

    //mixpanel.identify(state.visitor.uniqueId);

    dispatch({
      type: "LOAD",
      payload: state,
    });
  }
  api("visitors/ping", { url: window.location.href }).then((response) => {
    dispatch({ type: "UPDATE_VISITOR", payload: response.data });
  });
};

export const alert = (dispatch, message, color) => {
  dispatch({ type: "ADD_ALERT", payload: { message, color } });
  setTimeout(() => {
    dispatch({ type: "REMOVE_ALERT", payload: { message } });
  }, 3000);
};

export const registerVisitor = (dispatch, params = {}) => {
  const res = useMutation("visitors", params, (res) => {
    dispatch({ type: "UPDATE_VISITOR", payload: res });
    alert(dispatch, "Recibimos la información, gracias!", "green");
  });

  return res;
};

export const getVideoToken = async (dispatch, identity, roomName) => {
  const headers = new window.Headers();
  const endpoint =
    process.env.REACT_APP_TOKEN_ENDPOINT ||
    "https://rodriguezlab.ngrok.io/tokens";
  const params = new window.URLSearchParams({ identity, roomName });
  const res = await fetch(`${endpoint}?${params}`, { headers });
  const token = await res.text();
  dispatch({ type: "VIDEO_SETTINGS", payload: { token } });
};

export const updateVideoSettings = (dispatch, settings) => {
  dispatch({ type: "VIDEO_SETTINGS", payload: settings });
};
