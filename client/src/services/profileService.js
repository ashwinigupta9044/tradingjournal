
import api from "./api";



// =========================
// GET PROFILE
// =========================

export const getProfile =
async()=>{

  const response =

  await api.get(

    "/api/profile"

  );



  return response.data;

};



// =========================
// UPDATE PROFILE
// =========================

export const updateProfile =
async(profileData)=>{

  const response =

  await api.put(

    "/api/profile",

    profileData

  );



  return response.data;

};



// =========================
// UPLOAD AVATAR
// =========================

export const uploadAvatar =
async(formData)=>{

  const response =

  await api.post(

    "/api/profile/avatar",

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

