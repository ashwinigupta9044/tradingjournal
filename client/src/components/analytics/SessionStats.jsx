export default function SessionStats({

  trades = [],

}) {




  // ======================
  // USER FILTER
  // ======================

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




  // ======================
  // SESSION COUNTS
  // ======================

  const london =

  userTrades.filter(

    (trade)=>

    trade.session === "London"

  ).length;




  const newYork =

  userTrades.filter(

    (trade)=>

    trade.session === "New York"

  ).length;




  const asia =

  userTrades.filter(

    (trade)=>

    trade.session === "Asia"

  ).length;




  const total =
  userTrades.length || 1;




  // ======================
  // WIDTH %
  // ======================

  const londonWidth =

  (london / total) * 100;




  const newYorkWidth =

  (newYork / total) * 100;




  const asiaWidth =

  (asia / total) * 100;





  return (

    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">




      {/* HEADER */}

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-2xl font-bold">

          Session Stats

        </h2>




        <span className="text-sm text-gray-400">

          {userTrades.length} Trades

        </span>

      </div>




      <div className="space-y-6">




        {/* LONDON */}

        <div>

          <div className="flex justify-between mb-2">

            <span>

              London

            </span>

            <span className="text-blue-400 font-bold">

              {london}

            </span>

          </div>




          <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">

            <div

              className="h-3 bg-blue-500 rounded-full transition-all duration-500"

              style={{

                width:
                `${londonWidth}%`

              }}

            />

          </div>

        </div>




        {/* NEW YORK */}

        <div>

          <div className="flex justify-between mb-2">

            <span>

              New York

            </span>

            <span className="text-purple-400 font-bold">

              {newYork}

            </span>

          </div>




          <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">

            <div

              className="h-3 bg-purple-500 rounded-full transition-all duration-500"

              style={{

                width:
                `${newYorkWidth}%`

              }}

            />

          </div>

        </div>




        {/* ASIA */}

        <div>

          <div className="flex justify-between mb-2">

            <span>

              Asia

            </span>

            <span className="text-green-400 font-bold">

              {asia}

            </span>

          </div>




          <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">

            <div

              className="h-3 bg-green-500 rounded-full transition-all duration-500"

              style={{

                width:
                `${asiaWidth}%`

              }}

            />

          </div>

        </div>

      </div>

    </div>

  );

}