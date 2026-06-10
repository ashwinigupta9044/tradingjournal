
import api from "./api";



// =========================
// UPLOAD IMAGE
// =========================

export const uploadImage =
async(file)=>{

  const formData =
  new FormData();



  formData.append(

    "image",

    file

  );



  const response =

  await api.post(

    "/api/upload",

    formData,

    {

      headers:{

        "Content-Type":
        "multipart/form-data",

      },

    }

  );



  return response.data;

};



// =========================
// UPLOAD TRADE SCREENSHOT
// =========================

export const uploadTradeScreenshot =
async(file)=>{

  const formData =
  new FormData();



  formData.append(

    "screenshot",

    file

  );



  const response =

  await api.post(

    "/api/upload/trade",

    formData,

    {

      headers:{

        "Content-Type":
        "multipart/form-data",

      },

    }

  );



  return response.data;

};

