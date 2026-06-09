export default function PsychologyStats({

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
  // CALCULATE LIVE EMOTIONS
  // =========================

  const totalTrades =

  userTrades.length || 1;




  const winningTrades =

  userTrades.filter(

    (trade)=>

    Number(trade.profit) > 0

  ).length;




  const losingTrades =

  userTrades.filter(

    (trade)=>

    Number(trade.profit) < 0

  ).length;




  const bigWins =

  userTrades.filter(

    (trade)=>

    Number(trade.profit) >= 100

  ).length;




  const disciplinedTrades =

  userTrades.filter(

    (trade)=>

    trade.strategy &&

    trade.strategy.trim() !== ""

  ).length;





  // =========================
  // EMOTION DATA
  // =========================

  const emotions = [

    {

      emotion:"Confident",

      percent:Math.round(

        (winningTrades / totalTrades)

        * 100

      ),

    },




    {

      emotion:"Fear",

      percent:Math.round(

        (losingTrades / totalTrades)

        * 100

      ),

    },




    {

      emotion:"Greed",

      percent:Math.round(

        (bigWins / totalTrades)

        * 100

      ),

    },




    {

      emotion:"Discipline",

      percent:Math.round(

        (disciplinedTrades / totalTrades)

        * 100

      ),

    },

  ];





  return (

    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">




      {/* HEADER */}

      <div className="mb-6">

        <h2 className="text-2xl font-bold">

          Trading Psychology

        </h2>

        <p className="text-gray-400 mt-2">

          Live emotional analysis

        </p>

      </div>




      {/* EMOTIONS */}

      <div className="space-y-5">

        {emotions.map((item,index)=>(

          <div key={index}>




            {/* TOP */}

            <div className="flex justify-between mb-2">

              <span>

                {item.emotion}

              </span>

              <span className="text-gray-400">

                {item.percent}%

              </span>

            </div>




            {/* BAR */}

            <div className="w-full h-3 rounded-full bg-black/20 overflow-hidden">

              <div

                className="h-full bg-purple-500 rounded-full transition-all duration-500"

                style={{

                  width:
                  `${item.percent}%`,

                }}

              />

            </div>

          </div>

        ))}

      </div>




      {/* FOOTER */}

      <div className="mt-8 grid grid-cols-2 gap-4">




        <div className="bg-black/20 rounded-2xl p-4 text-center">

          <h3 className="text-2xl font-bold text-green-400">

            {winningTrades}

          </h3>

          <p className="text-gray-400 text-sm mt-1">

            Winning Trades

          </p>

        </div>




        <div className="bg-black/20 rounded-2xl p-4 text-center">

          <h3 className="text-2xl font-bold text-red-400">

            {losingTrades}

          </h3>

          <p className="text-gray-400 text-sm mt-1">

            Losing Trades

          </p>

        </div>

      </div>

    </div>

  );

}