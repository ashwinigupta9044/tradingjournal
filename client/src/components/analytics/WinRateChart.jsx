export default function WinRateChart({

  trades = [],

}) {




  // =========================
  // USER TRADES
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
  // CALCULATE
  // =========================

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




  const total =

  userTrades.length;




  const winRate =

  total > 0

  ? (

      (wins / total)

      * 100

    ).toFixed(1)

  : 0;





  return (

    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">




      {/* HEADER */}

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-2xl font-bold">

          Win Rate

        </h2>




        <div className="text-sm text-gray-400">

          {total} Trades

        </div>

      </div>




      {/* CENTER */}

      <div className="flex flex-col items-center justify-center h-60">




        {/* WIN RATE */}

        <h1 className="text-6xl font-bold text-green-400">

          {winRate}%

        </h1>




        <p className="text-gray-400 mt-4">

          Winning Accuracy

        </p>




        {/* STATS */}

        <div className="flex items-center gap-6 mt-8">




          {/* WINS */}

          <div className="bg-green-500/10 border border-green-500/20 px-6 py-4 rounded-2xl text-center">

            <h3 className="text-2xl font-bold text-green-400">

              {wins}

            </h3>

            <p className="text-sm text-gray-400 mt-1">

              Wins

            </p>

          </div>




          {/* LOSSES */}

          <div className="bg-red-500/10 border border-red-500/20 px-6 py-4 rounded-2xl text-center">

            <h3 className="text-2xl font-bold text-red-400">

              {losses}

            </h3>

            <p className="text-sm text-gray-400 mt-1">

              Losses

            </p>

          </div>

        </div>

      </div>

    </div>

  );

}