import {

  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,

} from "recharts";

export default function RiskRewardChart({

  trades = [],

}) {




  // =========================
  // USER FILTER
  // =========================

  const userId =
  localStorage.getItem(

    "userId"

  );




  const userTrades =

  trades.filter(

    (trade)=>

      trade.user === userId ||

      trade.user?._id === userId

  );




  // =========================
  // CALCULATE STATS
  // =========================

  const totalTrades =

  userTrades.length || 1;




  const wins =

  userTrades.filter(

    (trade)=>

    Number(trade.profit) > 0

  ).length;




  const losses =

  userTrades.filter(

    (trade)=>

    Number(trade.profit) < 0

  ).length;




  const avgProfit =

  userTrades.reduce(

    (acc,trade)=>

      acc +

      Number(

        trade.profit || 0

      ),

    0

  ) / totalTrades;





  // =========================
  // RADAR DATA
  // =========================

  const data = [

    {

      subject:"Risk",

      value:Math.min(

        losses * 15,

        100

      ),

    },




    {

      subject:"Reward",

      value:Math.min(

        wins * 15,

        100

      ),

    },




    {

      subject:"Discipline",

      value:Math.min(

        totalTrades * 10,

        100

      ),

    },




    {

      subject:"Patience",

      value:Math.max(

        100 - losses * 10,

        20

      ),

    },




    {

      subject:"Execution",

      value:Math.min(

        Math.abs(avgProfit),

        100

      ),

    },

  ];





  return (

    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-[400px]">




      {/* HEADER */}

      <div className="mb-6">

        <h2 className="text-2xl font-bold">

          Risk Reward Analysis

        </h2>

        <p className="text-gray-400 mt-2">

          Live user trading performance radar

        </p>

      </div>




      {/* CHART */}

      <ResponsiveContainer

        width="100%"

        height="80%">

        <RadarChart

          data={data}>




          {/* GRID */}

          <PolarGrid />




          {/* ANGLES */}

          <PolarAngleAxis

            dataKey="subject"

            tick={{

              fill:"#fff",

              fontSize:12

            }}

          />




          {/* RADIUS */}

          <PolarRadiusAxis

            angle={30}

            domain={[0,100]}

          />




          {/* RADAR */}

          <Radar

            name="Stats"

            dataKey="value"

            stroke="#7c3aed"

            fill="#7c3aed"

            fillOpacity={0.5}

          />

        </RadarChart>

      </ResponsiveContainer>

    </div>

  );

}