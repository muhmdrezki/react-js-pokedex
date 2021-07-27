import { useEffect, useState } from "react";
import axios from "axios";

// Get and Post Request => with url and body param
const httpRequest = {
  Get: (url, body) => {
    // prepare the useState
    const [response, setResponse] = useState({
      loading: false,
      data: null,
      error: false,
    });

    useEffect(() => {
      setResponse({
        loading: true,
        data: null,
        error: false,
      });

      axios
        .get(url, {
          ...body,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((response) => {
          if (response.status === 200 || response.status === 201)
            setResponse({
              loading: false,
              data: response.data,
              error: false,
            });
        })
        .catch((e) => {
          // Here you can custom every error response by code if you want
          setResponse({
            loading: false,
            data: e,
            error: true,
          });
        });
    }, [url, body]);

    return response;
  },
  // Post: (url, body) => {
  //   // prepare the useState
  //   const [response, setResponse] = useState({
  //     loading: false,
  //     data: null,
  //     error: false,
  //   });

  //   useEffect(() => {
  //     setResponse({
  //       loading: true,
  //       data: null,
  //       error: false,
  //     });
  //     axios
  //       .get(url, body, {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Accept: "application/json",
  //         },
  //       })
  //       .then((response) => {
  //         if (response.status === 200 || response.status === 201)
  //           setResponse({
  //             loading: false,
  //             data: response.data,
  //             error: false,
  //           });
  //       })
  //       .catch((e) => {
  //         // Here you can custom every error response by code if you want
  //         setResponse({
  //           loading: false,
  //           data: e,
  //           error: true,
  //         });
  //       });
  //   }, [url, body]);

  //   return response;
  // },
};

export default httpRequest;
