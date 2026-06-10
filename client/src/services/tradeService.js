
// =========================
// tradeService.js
// =========================

import api from "./api";



// GET TRADES

export const getTrades =
async()=>{

  const response =

  await api.get(

    "/trades"

  );



  return response.data;

};



// GET SINGLE TRADE

export const getTradeById =
async(id)=>{

  const response =

  await api.get(

    `/trades/${id}`

  );



  return response.data;

};



// CREATE TRADE

export const createTrade =
async(tradeData)=>{

  const response =

  await api.post(

    "/trades",

    tradeData

  );



  return response.data;

};



// UPDATE TRADE

export const updateTrade =
async(id,tradeData)=>{

  const response =

  await api.put(

    `/trades/${id}`,

    tradeData

  );



  return response.data;

};



// DELETE TRADE

export const deleteTrade =
async(id)=>{

  const response =

  await api.delete(

    `/trades/${id}`

  );



  return response.data;

};

