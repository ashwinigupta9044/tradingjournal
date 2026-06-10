
import { useState } from "react";

import api from "../../services/api";



export default function AddTradeModal({

  closeModal,
  refreshTrades,

}) {




  // =========================
  // STATES
  // =========================

  const [loading,setLoading] =
  useState(false);

  const [formData,setFormData] =
  useState({

    symbol:"",
    session:"",
    side:"BUY",
    entry:"",
    exit:"",
    profit:"",
    lotsize:"",

  });




  // =========================
  // HANDLE INPUT
  // =========================

  const handleChange = (e)=>{

    setFormData({

      ...formData,

      [e.target.name]:
      e.target.value,

    });

  };




  // =========================
  // HANDLE SUBMIT
  // =========================

  const handleSubmit =
  async(e)=>{

    e.preventDefault();

    setLoading(true);




    try{

      // =========================
      // API
      // =========================

      await api.post(

        "/trades",

        {

          symbol:
          formData.symbol,

          session:
          formData.session,

          side:
          formData.side,

          entry:
          Number(formData.entry),

          exit:
          Number(formData.exit),

          profit:
          Number(formData.profit),

          lotsize:
          formData.lotsize,

        }

      );




      alert(

        "Trade Saved ✅"

      );




      // =========================
      // REFRESH
      // =========================

      refreshTrades();




      // =========================
      // CLOSE MODAL
      // =========================

      closeModal();

    }catch(error){

      console.log(

        error.response?.data ||

        error.message

      );




      alert(

        error.response?.data?.message ||

        "Save Failed"

      );

    }finally{

      setLoading(false);

    }

  };




  return (

    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-5">




      <form

        onSubmit={handleSubmit}

        className="bg-[#0B1120] border border-white/10 rounded-3xl p-8 w-full max-w-xl">




        {/* TITLE */}

        <h2 className="text-3xl font-bold mb-6">

          Add Trade

        </h2>




        <div className="grid grid-cols-2 gap-4">




          {/* SYMBOL */}

          <input
            type="text"
            name="symbol"
            placeholder="Symbol"
            value={formData.symbol}
            onChange={handleChange}
            required
            className="p-4 rounded-xl bg-black/20 border border-white/10 outline-none text-white"
          />




          {/* SESSION */}

          <select
            name="session"
            value={formData.session}
            onChange={handleChange}
            required
            className="p-4 rounded-xl bg-black/20 border border-white/10 outline-none text-white">

            <option value="">

              Session

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




          {/* SIDE */}

          <select
            name="side"
            value={formData.side}
            onChange={handleChange}
            className="p-4 rounded-xl bg-black/20 border border-white/10 outline-none text-white">

            <option value="BUY">

              BUY

            </option>

            <option value="SELL">

              SELL

            </option>

          </select>




          {/* LOT SIZE */}

          <input
            type="text"
            name="lotsize"
            placeholder="Lot Size"
            value={formData.lotsize}
            onChange={handleChange}
            required
            className="p-4 rounded-xl bg-black/20 border border-white/10 outline-none text-white"
          />




          {/* ENTRY */}

          <input
            type="number"
            name="entry"
            placeholder="Entry"
            value={formData.entry}
            onChange={handleChange}
            required
            className="p-4 rounded-xl bg-black/20 border border-white/10 outline-none text-white"
          />




          {/* EXIT */}

          <input
            type="number"
            name="exit"
            placeholder="Exit"
            value={formData.exit}
            onChange={handleChange}
            required
            className="p-4 rounded-xl bg-black/20 border border-white/10 outline-none text-white"
          />




          {/* PROFIT */}

          <input
            type="number"
            name="profit"
            placeholder="Profit"
            value={formData.profit}
            onChange={handleChange}
            required
            className="p-4 rounded-xl bg-black/20 border border-white/10 outline-none text-white col-span-2"
          />

        </div>




        {/* BUTTONS */}

        <div className="flex gap-4 mt-6">




          {/* SAVE */}

          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-purple-600 hover:bg-purple-700 py-4 rounded-2xl font-semibold transition-all">

            {loading

              ? "Saving..."

              : "Save Trade"

            }

          </button>




          {/* CANCEL */}

          <button
            type="button"
            onClick={closeModal}
            className="flex-1 bg-white/10 hover:bg-white/20 py-4 rounded-2xl transition-all">

            Cancel

          </button>

        </div>

      </form>

    </div>

  );

}

