
import { useEffect,useState } from "react";

import api from "../../services/api";

import JournalCard from "./JournalCard";



export default function JournalList() {

  // =========================
  // STATES
  // =========================

  const [journals,setJournals] =
  useState([]);

  const [loading,setLoading] =
  useState(true);




  // =========================
  // FETCH JOURNALS
  // =========================

  const fetchJournals =
  async()=>{

    try{

      // =========================
      // API
      // =========================

      const response =
      await api.get(

        "/api/journals"

      );




      console.log(

        response.data

      );




      setJournals(

        response.data

      );

    }catch(error){

      console.log(

        error.response?.data ||

        error.message

      );

    }finally{

      setLoading(false);

    }

  };




  // =========================
  // LOAD
  // =========================

  useEffect(()=>{

    fetchJournals();

  },[]);




  // =========================
  // LOADING
  // =========================

  if(loading){

    return (

      <div className="text-gray-400">

        Loading...

      </div>

    );

  }




  // =========================
  // EMPTY
  // =========================

  if(journals.length === 0){

    return (

      <div className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center">

        <h2 className="text-2xl font-bold">

          No Journals Found

        </h2>

      </div>

    );

  }




  // =========================
  // UI
  // =========================

  return (

    <div className="space-y-6">

      {journals.map((journal)=>(

        <JournalCard

          key={journal._id}

          journal={journal}

          refreshJournals={
            fetchJournals
          }

        />

      ))}

    </div>

  );

}

