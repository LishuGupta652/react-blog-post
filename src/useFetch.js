import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
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
          setloading(false);
          seterror(err.message);
        });
    }, 1000);
  }, [url]);
  return { data, loading, error };
};

export default useFetch;
