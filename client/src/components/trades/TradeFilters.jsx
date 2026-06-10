
export default function TradeFilters() {

  return (

    <div className="flex flex-wrap gap-4 mb-6">




      {/* SEARCH */}

      <input
        type="text"
        placeholder="Search Symbol..."
        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none text-white"
      />




      {/* STRATEGY */}

      <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white">

        <option value="">

          All Strategies

        </option>

        <option value="CRT">

          CRT

        </option>

        <option value="SMC">

          SMC

        </option>

      </select>




      {/* SESSION */}

      <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white">

        <option value="">

          All Sessions

        </option>

        <option value="London">

          London

        </option>

        <option value="New York">

          New York

        </option>

        <option value="Asia">

          Asia

        </option>

      </select>

    </div>

  );

}

