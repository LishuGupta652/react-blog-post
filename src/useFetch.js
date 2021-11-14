import { useState, useEffect } from "react";

const useFetch = (url) => {
  const abortCont = new AbortController();

  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Could not resolve the request");
          }
          return res.json();
        })
        .then((data) => {
          setloading(false);
          setdata(data);
          seterror(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Request Aborted");
          } else {
            setloading(false);
            seterror(err.message);
          }
        });

      return () => {
        abortCont.abort();
      };
    }, 1000);
  }, [url]);
  return { data, loading, error };
};

export default useFetch;
