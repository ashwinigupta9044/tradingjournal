
import api from "./api";



// =========================
// GET JOURNALS
// =========================

export const getJournals =
async()=>{

  const response =

  await api.get(

    "/journals"

  );



  return response.data;

};



// =========================
// CREATE JOURNAL
// =========================

export const createJournal =
async(journalData)=>{

  const response =

  await api.post(

    "/journals",

    journalData

  );



  return response.data;

};



// =========================
// UPDATE JOURNAL
// =========================

export const updateJournal =
async(id,journalData)=>{

  const response =

  await api.put(

    `/journals/${id}`,

    journalData

  );



  return response.data;

};



// =========================
// DELETE JOURNAL
// =========================

export const deleteJournal =
async(id)=>{

  const response =

  await api.delete(

    `/journals/${id}`

  );



  return response.data;

};

