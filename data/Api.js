import React, { useState, useEffect, useCallback } from "react";

export async function query(route, body, headers = {}) {
  // Call an external API endpoint to get posts

  try {
    // Fetch data and remember product id

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/${route}`,
      {
        headers: {
          accept: "application/json",
          "accept-language": "en-US,en;q=0.9,es;q=0.8",
          authorization: "Bearer undefined",
          "content-type": "application/json",
          ...headers,
        },
        credentials: "include",
        body: JSON.stringify(body),
        method: "POST",
      }
    );

    const json = await response.json();
    if (json.errors) {
      console.error(json.errors);
      throw new Error("Failed to fetch API");
    }

    return json;
  } catch (e) {
    console.log(e);
    return {
      message: e.message || "Server Error",
      status: e.status || e.statusCode || 500,
    };
  }
}

export const useFetch = (url, opts, sideEffects) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [success, setSuccess] = useState();

  useEffect(() => {
    setLoading(true);
    query(url, opts)
      .then((res) => {
        if (sideEffects) sideEffects(res);
        setResponse(res.data);
        setLoading(false);
        return res;
      })
      .then((res) => {
        setSuccess(true);
        return res;
      })
      .catch(() => {
        setSuccess(false);
        setHasError(true);
        setLoading(false);
      });
  }, [url]);
  return [response, loading, hasError, success];
};

export const useMutation = (url, opts, sideEffects) => {
  const [state, setState] = React.useState({
    data: null,
    error: null,
    loading: false,
    success: null,
    loaded: false,
  });

  const mutate = useCallback(
    (callTimeOptions) => {
      const params = { ...opts, ...callTimeOptions };

      setState((prevState) => ({ ...prevState, loading: true }));

      return query(url, params)
        .then((res) => {
          const { data } = res;
          if (sideEffects) sideEffects(data);
          setState({
            data,
            loading: false,
            loaded: true,
            success: true,
          });
          return data;
        })
        .catch((errorFromResponse) => {
          setState({
            error: errorFromResponse,
            loading: false,
            success: false,
            loaded: false,
          });
        });
    },
    [JSON.stringify({ url, opts }), setState]
  );
  return [mutate, state];
};

export const useUpload = (sideEffects) => {
  const [state, setState] = React.useState({
    data: {},
    error: null,
    loading: false,
    success: null,
    loaded: false,
  });

  const upload = (file) => {
    let imageUrl;
    setState((prevState) => ({ ...prevState, loading: true }));
    const url = `upload/sign-s3?file-name=${file.name}&file-type=${file.type}`;
    return query(url)
      .then((res) => {
        if (res.status && res.status > 204) throw new Error(res);
        imageUrl = res.url;
        return fetch(res.signedRequest, {
          body: file,
          method: "PUT",
        });
      })
      .then((response) => {
        if (sideEffects) sideEffects(json);
        if (response.status && response.status > 204) throw new Error(response);
        setState({
          data: { url: imageUrl },
          loading: false,
          success: true,
          loaded: true,
        });
      })

      .catch((errorFromResponse) => {
        setState({
          error: errorFromResponse,
          loading: false,
          success: false,
          loaded: true,
        });
      });
  };

  return [upload, state];
};
