import { useEffect,useState } from "react";

import axios from "axios";
import api from "../services/api";


import Sidebar from "../components/layout/Sidebar";

import Navbar from "../components/layout/Navbar";

import WinRateChart from "../components/analytics/WinRateChart";

import MonthlyProfit from "../components/analytics/MonthlyProfit";

import DrawdownChart from "../components/analytics/DrawdownChart";

import HeatMap from "../components/analytics/HeatMap";

import SessionStats from "../components/analytics/SessionStats";

import PsychologyStats from "../components/analytics/PsychologyStats";

export default function Analytics() {




  // =========================
  // STATES
  // =========================

  const [trades,setTrades] =
  useState([]);




  // =========================
  // FETCH TRADES
  // =========================

  const fetchTrades =
  async()=>{

    try{

      // TOKEN

      const token =
      localStorage.getItem(

        "token"

      );




      // API

      const response =
      await axios.get(

        "/api/trades",

        {

          headers:{

            Authorization:

            `Bearer ${token}`

          }

        }

      );




      setTrades(

        response.data

      );

    }catch(error){

      console.log(

        error.response?.data ||

        error.message

      );

    }

  };




  // =========================
  // AUTO LOAD
  // =========================

  useEffect(()=>{

    fetchTrades();




    // LIVE REFRESH

    const interval =

    setInterval(()=>{

      fetchTrades();

    },3000);




    return ()=>{

      clearInterval(interval);

    };

  },[]);




  // =========================
  // UI
  // =========================

  return (

    <div className="flex min-h-screen bg-[#050816] text-white">




      {/* SIDEBAR */}

      <Sidebar />




      {/* MAIN */}

      <div className="flex-1 ml-64 p-8">




        {/* NAVBAR */}

        <Navbar />




        {/* HEADER */}

        <div className="mt-8">

          <h1 className="text-4xl font-bold">

            Analytics

          </h1>

          <p className="text-gray-400 mt-2">

            Analyze your trading performance.

          </p>

        </div>




        {/* ANALYTICS GRID */}

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">




          {/* WIN RATE */}

          <WinRateChart

            trades={trades}

          />




          {/* MONTHLY PROFIT */}

          <MonthlyProfit

            trades={trades}

          />




          {/* DRAWDOWN */}

          <DrawdownChart

            trades={trades}

          />




          {/* HEATMAP */}

          <HeatMap

            trades={trades}

          />




          {/* SESSION STATS */}

          <SessionStats

            trades={trades}

          />




          {/* PSYCHOLOGY */}

          <PsychologyStats

            trades={trades}

          />

        </div>

      </div>

    </div>

  );

}