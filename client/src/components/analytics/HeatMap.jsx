export default function HeatMap({

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
  // SORT LATEST FIRST
  // =========================

  const sortedTrades =

  [...userTrades].sort(

    (a,b)=>

      new Date(b.createdAt)

      -

      new Date(a.createdAt)

  );




  // =========================
  // HEATMAP DATA
  // =========================

  const heatmapData =

  sortedTrades.map(

    (trade)=>({

      profit:
      Number(

        trade.profit || 0

      ),

    })

  );





  return (

    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">




      {/* HEADER */}

      <div className="mb-6">

        <h2 className="text-2xl font-bold">

          Trading HeatMap

        </h2>

        <p className="text-gray-400 mt-2">

          Live profit/loss overview

        </p>

      </div>




      {/* GRID */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">




        {heatmapData.length > 0 ? (

          heatmapData.map((item,index)=>(

            <div

              key={index}

              className={`h-24 rounded-2xl flex flex-col items-center justify-center font-bold text-lg border transition-all duration-300 hover:scale-105

                ${item.profit < 0

                  ? "bg-red-500/20 border-red-500/20 text-red-400"

                  : item.profit > 0

                  ? "bg-green-500/20 border-green-500/20 text-green-400"

                  : "bg-gray-500/20 border-gray-500/20 text-gray-300"

                }`}>




              {/* VALUE */}

              <h3 className="text-2xl font-bold">

                {item.profit > 0

                  ? `+$${item.profit}`

                  : item.profit < 0

                  ? `-$${Math.abs(item.profit)}`

                  : "$0"

                }

              </h3>




              {/* STATUS */}

              <p className="text-xs mt-1 opacity-70">

                {item.profit > 0

                  ? "Profit"

                  : item.profit < 0

                  ? "Loss"

                  : "Breakeven"

                }

              </p>

            </div>

          ))

        ) : (

          <div className="col-span-4 text-center text-gray-400 py-14 bg-black/20 rounded-2xl">

            No trade data available

          </div>

        )}

      </div>

    </div>

  );

}