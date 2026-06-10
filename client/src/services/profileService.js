
import api from "./api";



// =========================
// GET PROFILE
// =========================

export const getProfile =
async()=>{

  const response =

  await api.get(

    "/profile"

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

    "/profile",

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

    "/profile/avatar",

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

