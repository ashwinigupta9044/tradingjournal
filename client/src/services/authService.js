
// =========================
// authService.js
// =========================

import api from "./api";



// REGISTER

export const registerUser =
async(userData)=>{

  const response =

  await api.post(

    "/api/auth/register",

    userData

  );



  if(response.data.token){

    localStorage.setItem(

      "token",

      response.data.token

    );

  }



  return response.data;

};



// LOGIN

export const loginUser =
async(userData)=>{

  const response =

  await api.post(

    "/api/auth/login",

    userData

  );



  if(response.data.token){

    localStorage.setItem(

      "token",

      response.data.token

    );

  }



  return response.data;

};



// LOGOUT

export const logoutUser = ()=>{

  localStorage.removeItem(

    "token"

  );

};

