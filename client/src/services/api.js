import axios from "axios";



// =========================
// API BASE URL
// =========================

const api = axios.create({

  baseURL:
  import.meta.env.VITE_API_URL,



  headers: {

    "Content-Type":
    "application/json",

  },

});



// =========================
// REQUEST INTERCEPTOR
// =========================

api.interceptors.request.use(

  (config) => {

    // TOKEN

    const token =
    localStorage.getItem(

      "token"

    );



    // ADD TOKEN

    if (token) {

      config.headers.Authorization =

      `Bearer ${token}`;

    }



    return config;

  },

  (error) => {

    return Promise.reject(

      error

    );

  }

);



// =========================
// RESPONSE INTERCEPTOR
// =========================

api.interceptors.response.use(

  (response) => {

    return response;

  },

  (error) => {

    // UNAUTHORIZED

    if (

      error.response?.status === 401

    ) {

      // REMOVE TOKEN

      localStorage.removeItem(

        "token"

      );



      localStorage.removeItem(

        "userId"

      );



      // REDIRECT LOGIN

      window.location.href =
      "/login";

    }



    return Promise.reject(

      error

    );

  }

);



// =========================
// EXPORT
// =========================

export default api;