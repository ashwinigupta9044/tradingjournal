
import api from "./api";



// =========================
// GET ANALYTICS
// =========================

export const getAnalytics =
async()=>{

  const response =

  await api.get(

    "/api/analytics"

  );



  return response.data;

};



// =========================
// MONTHLY ANALYTICS
// =========================

export const getMonthlyAnalytics =
async()=>{

  const response =

  await api.get(

    "/api/analytics/monthly"

  );



  return response.data;

};



// =========================
// SESSION ANALYTICS
// =========================

export const getSessionAnalytics =
async()=>{

  const response =

  await api.get(

    "/api/analytics/sessions"

  );



  return response.data;

};



// =========================
// WIN RATE ANALYTICS
// =========================

export const getWinRateAnalytics =
async()=>{

  const response =

  await api.get(

    "/api/analytics/winrate"

  );



  return response.data;

};



// =========================
// DRAWDOWN ANALYTICS
// =========================

export const getDrawdownAnalytics =
async()=>{

  const response =

  await api.get(

    "/api/analytics/drawdown"

  );



  return response.data;

};

