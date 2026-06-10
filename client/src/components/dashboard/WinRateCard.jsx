
import { TrendingUp } from "lucide-react";

export default function WinRateCard({

  trades = [],

}) {

  // =========================
  // TOTAL TRADES
  // =========================

  const totalTrades =

  trades.length;



  // =========================
  // WINNING TRADES
  // =========================

  const winningTrades =

  trades.filter(

    (trade)=>

      Number(trade.profit) > 0

  ).length;



  // =========================
  // WIN RATE
  // =========================

  const winRate =

  totalTrades > 0

  ? (

      (winningTrades / totalTrades)

      * 100

    ).toFixed(1)

  : 0;



  return (

    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-purple-500/10 shadow-lg">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-gray-400 text-sm">

            Win Rate

          </p>



          <h2 className="text-4xl font-bold mt-3 text-blue-400">

            {winRate}%

          </h2>

        </div>



        <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400">

          <TrendingUp size={28} />

        </div>

      </div>



      <div className="mt-5 text-blue-400 text-sm">

        {winningTrades} winning trades

      </div>

    </div>

  );

}

