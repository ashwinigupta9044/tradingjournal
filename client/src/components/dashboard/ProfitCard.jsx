
import { DollarSign } from "lucide-react";

export default function ProfitCard({

  trades = [],

}) {

  // =========================
  // TOTAL PROFIT
  // =========================

  const totalProfit =

  trades.reduce(

    (acc,trade)=>

      acc +

      Number(

        trade.profit || 0

      ),

    0

  );



  // =========================
  // LAST MONTH PROFIT
  // =========================

  const currentDate =
  new Date();



  const currentMonth =
  currentDate.getMonth();



  const currentYear =
  currentDate.getFullYear();



  const monthlyTrades =

  trades.filter(

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



  const monthlyProfit =

  monthlyTrades.reduce(

    (acc,trade)=>

      acc +

      Number(

        trade.profit || 0

      ),

    0

  );



  return (

    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-purple-500/10 shadow-lg">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-gray-400 text-sm">

            Total Profit

          </p>



          <h2 className={`text-4xl font-bold mt-3

            ${totalProfit >= 0

              ? "text-green-400"

              : "text-red-400"

            }`}>

            ${totalProfit.toFixed(2)}

          </h2>

        </div>



        <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-400">

          <DollarSign size={28} />

        </div>

      </div>



      <div className={`mt-5 text-sm

        ${monthlyProfit >= 0

          ? "text-green-400"

          : "text-red-400"

        }`}>

        {

          monthlyProfit >= 0

          ? "+"

          : "-"

        }

        ${Math.abs(monthlyProfit).toFixed(2)}

        {" "}this month

      </div>

    </div>

  );

}

