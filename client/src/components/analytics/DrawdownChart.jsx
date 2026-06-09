import {

  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,

} from "recharts";

export default function DrawdownChart({

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
  // SORT OLDEST FIRST
  // =========================

  const sortedTrades =

  [...userTrades].sort(

    (a,b)=>

      new Date(a.createdAt)

      -

      new Date(b.createdAt)

  );




  // =========================
  // CREATE DRAWDOWN DATA
  // =========================

  let peak = 0;

  let balance = 0;




  const chartData =

  sortedTrades.length > 0

  ? sortedTrades.map(

      (trade,index)=>{

        balance +=

        Number(

          trade.profit || 0

        );




        // UPDATE PEAK

        if(balance > peak){

          peak = balance;

        }




        // CALCULATE DD

        const drawdown =

        peak - balance;




        return {

          day:
          `T${index + 1}`,

          drawdown:
          Number(

            drawdown.toFixed(2)

          ),

        };

      }

    )

  : [

      {

        day:"T1",

        drawdown:0,

      },

    ];





  return (

    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-[400px]">




      {/* HEADER */}

      <div className="mb-6">

        <h2 className="text-2xl font-bold">

          Drawdown Analysis

        </h2>

        <p className="text-gray-400 mt-2">

          Live user drawdown from trades

        </p>

      </div>




      {/* CHART */}

      <ResponsiveContainer

        width="100%"

        height="80%">

        <AreaChart

          data={chartData}>




          {/* X AXIS */}

          <XAxis

            dataKey="day"

            stroke="#9CA3AF"

          />




          {/* Y AXIS */}

          <YAxis

            stroke="#9CA3AF"

          />




          {/* TOOLTIP */}

          <Tooltip />




          {/* AREA */}

          <Area

            type="monotone"

            dataKey="drawdown"

            stroke="#ef4444"

            fill="#ef4444"

            fillOpacity={0.3}

          />

        </AreaChart>

      </ResponsiveContainer>

    </div>

  );

}