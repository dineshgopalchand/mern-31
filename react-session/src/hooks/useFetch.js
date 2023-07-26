import { useEffect, useState } from "react";

const useFetch = (url, option = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (url) {
      setLoading(true);
      fetch(url, option)
        .then((res) => {
          if (res.ok) {
            return res;
          } else {
            return Promise.reject({
              message: res.statusText,
              status: res.status,
            });
          }
        })
        .then((res) => res.json())
        .then((res) => {
          setLoading(false);
          setData(res);
        })
        .catch((err) => {
          setLoading(false);
          setError(err);
        });
    }
  }, [url, option]);

  return { data, loading, error };
};

export default useFetch;
