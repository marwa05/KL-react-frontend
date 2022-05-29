import { useEffect, useMemo, useState } from "react";

const useFetch = (settings) => {
  const {
    isReady,
    endpoint,
    state,
    onSuccess,
    onFailure,
    delay = 0
  } = settings;

  const options = useMemo(() => {
    const body = Object.keys(state).reduce((set, key) => {
      set[key] = state[key].value;
      return set;
    }, {});
    return {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    };
  }, [state]);

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    if (!isReady) return;
    setIsLoading(true);
    const timeoutId = setTimeout(() => {
      fetch(endpoint, options)
        .then((response) => response.json())
        .then((data) => {
          if (!isMounted) return;
          setData(JSON.parse(JSON.stringify(data)));
          onSuccess(data);
          setData(null);
          setIsLoading(false);
        })
        .catch((error) => {
          if (!isMounted) return;
          setError(error);
          onFailure(error);
          setError(null);
          setIsLoading(false);
        })
        .finally(() => {
          clearTimeout(timeoutId);
          if (!isMounted) return;
        });
    }, delay);
    return () => (isMounted = false);
  }, [isReady, endpoint, options, setIsLoading, delay, onSuccess, onFailure]);

  return { isLoading, data, error, setData, setError };
};

export default useFetch;
