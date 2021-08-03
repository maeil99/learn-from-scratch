import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          console.log(res);
          if (!res.ok) {
            throw Error("could not fetch data");
          } else {
            return res.json();
          }
        })
        .then((data) => {
          setData(data);
          setIsLoading((prev) => !prev);
          setIsError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setIsLoading(false);
            setIsError(err.message);
          }
        });
    }, 1000);

    return () => abortCont.abort();
  }, [url]);

  return {
    data,
    isLoading,
    isError,
  };
};

export default useFetch;
