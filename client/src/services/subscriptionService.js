
// =========================
// subscriptionService.js
// =========================

import api from "./api";



// GET SUBSCRIPTION

export const getSubscription =
async()=>{

  try{

    const response =

    await api.get(

      "/api/subscription"

    );



    return response.data;

  }catch(error){

    console.log(

      "GET SUBSCRIPTION ERROR:",

      error.response?.data ||

      error.message

    );



    throw error;

  }

};



// CREATE SUBSCRIPTION

export const createSubscription =
async(subscriptionData)=>{

  try{

    const response =

    await api.post(

      "/api/subscription",

      subscriptionData

    );



    return response.data;

  }catch(error){

    console.log(

      "CREATE SUBSCRIPTION ERROR:",

      error.response?.data ||

      error.message

    );



    throw error;

  }

};



// CANCEL SUBSCRIPTION

export const cancelSubscription =
async(id)=>{

  try{

    const response =

    await api.delete(

      `/api/subscription/${id}`

    );



    return response.data;

  }catch(error){

    console.log(

      "CANCEL SUBSCRIPTION ERROR:",

      error.response?.data ||

      error.message

    );



    throw error;

  }

};



// BILLING HISTORY

export const getBillingHistory =
async()=>{

  try{

    const response =

    await api.get(

      "/api/subscription/history"

    );



    return response.data;

  }catch(error){

    console.log(

      "BILLING HISTORY ERROR:",

      error.response?.data ||

      error.message

    );



    throw error;

  }

};

