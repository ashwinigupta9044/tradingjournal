export default function MonthlyProfit({

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
  // CURRENT MONTH FILTER
  // =========================

  const currentDate =
  new Date();




  const currentMonth =
  currentDate.getMonth();




  const currentYear =
  currentDate.getFullYear();




  const monthlyTrades =

  userTrades.filter(

    (trade)=>{

      const tradeDate =

      new Date(

        trade.createdAt

      );




      return (

        tradeDate.getMonth()

        === currentMonth &&

        tradeDate.getFullYear()

        === currentYear

      );

    }

  );




  // =========================
  // TOTAL PROFIT
  // =========================

  const totalProfit =

  monthlyTrades.reduce(

    (acc,trade)=>

      acc +

      Number(

        trade.profit || 0

      ),

    0

  );





  return (

    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">




      {/* HEADER */}

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-2xl font-bold">

          Monthly Profit

        </h2>




        <span className="text-sm text-gray-400">

          {monthlyTrades.length} Trades

        </span>

      </div>




      {/* PROFIT */}

      <div className="flex flex-col items-center justify-center h-60">




        <h1

          className={`text-6xl font-bold

          ${totalProfit >= 0

            ? "text-green-400"

            : "text-red-400"

          }`}>

          ${totalProfit.toFixed(2)}

        </h1>




        <p className="text-gray-400 mt-4">

          Current Month PnL

        </p>

      </div>

    </div>

  );

}