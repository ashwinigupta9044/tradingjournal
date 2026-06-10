import { useEffect,useState } from "react";

import axios from "axios";
import api from "../services/api";


import Navbar from
"../components/layout/Navbar";

import Sidebar from
"../components/layout/Sidebar";

import StatsCards from
"../components/dashboard/StatsCards";

import EquityChart from
"../components/dashboard/EquityChart";

import PerformanceChart from
"../components/dashboard/PerformanceChart";

import RecentTrades from
"../components/dashboard/RecentTrades";

import SessionOverview from
"../components/dashboard/SessionOverview";

export default function Dashboard() {




  // ======================
  // STATES
  // ======================

  const [trades,setTrades] =
  useState([]);

  const [stats,setStats] =
  useState({

    totalProfit:0,

    totalTrades:0,

    wins:0,

    losses:0,

    winRate:0,

  });




  // ======================
  // FETCH TRADES
  // ======================

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




      // SAVE

      setTrades(

        response.data

      );




      // CALCULATE

      calculateStats(

        response.data

      );

    }catch(error){

      console.log(

        error.response?.data ||

        error.message

      );

    }

  };




  // ======================
  // LOAD
  // ======================

  useEffect(()=>{

    fetchTrades();

  },[]);




  // ======================
  // CALCULATE STATS
  // ======================

  const calculateStats =
  (data)=>{

    let totalProfit = 0;

    let wins = 0;

    let losses = 0;




    data.forEach((trade)=>{

      totalProfit +=
      Number(trade.profit);




      if(

        Number(trade.profit) > 0

      ){

        wins++;

      }else{

        losses++;

      }

    });




    const totalTrades =
    data.length;




    const winRate =
    totalTrades > 0

    ? (

        (wins / totalTrades)

        * 100

      ).toFixed(1)

    : 0;




    setStats({

      totalProfit,

      totalTrades,

      wins,

      losses,

      winRate,

    });

  };




  // ======================
  // UI
  // ======================

  return (

    <div className="flex min-h-screen bg-[#050816] text-white">




      {/* SIDEBAR */}

      <Sidebar />




      {/* MAIN */}

      <div className="flex-1 ml-64 p-8">




        {/* NAVBAR */}

        <Navbar />




        {/* PAGE HEADER */}

        <div className="mt-8">

          <h1 className="text-5xl font-bold">

            Dashboard

          </h1>

          <p className="text-gray-400 mt-2">

            Welcome back trader 👋

          </p>

        </div>




        {/* STATS */}

        <StatsCards

          stats={stats}

        />




        {/* CHARTS */}

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">




          {/* EQUITY CURVE */}

          <EquityChart

            trades={trades}

          />




          {/* PERFORMANCE */}

          <PerformanceChart

            stats={stats}

          />

        </div>




        {/* RECENT + SESSION */}

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">




          {/* RECENT TRADES */}

          <RecentTrades

            trades={trades}

          />




          {/* SESSION OVERVIEW */}

          <SessionOverview

            trades={trades}

          />

        </div>

      </div>

    </div>

  );

}