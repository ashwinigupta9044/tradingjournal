
import { CandlestickChart } from "lucide-react";

export default function OpenTradesCard({

  trades = [],

}) {

  // =========================
  // OPEN TRADES
  // =========================

  const openTrades =

  trades.filter(

    (trade)=>

      trade.status === "Open"

  );



  // =========================
  // SESSION
  // =========================

  const londonTrades =

  openTrades.filter(

    (trade)=>

      trade.session === "London"

  );



  return (

    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-purple-500/10 shadow-lg">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-gray-400 text-sm">

            Open Trades

          </p>



          <h2 className="text-4xl font-bold mt-3">

            {openTrades.length}

          </h2>

        </div>



        <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-400">

          <CandlestickChart size={28} />

        </div>

      </div>



      <div className="mt-5 text-purple-400 text-sm">

        {

          londonTrades.length > 0

          ? "London session active"

          : "No active London trades"

        }

      </div>

    </div>

  );

}

