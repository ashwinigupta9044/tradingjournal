
import {

  useEffect,
  useState,

} from "react";

import {

  Navigate,

} from "react-router-dom";

import api from "../../services/api";





export default function SubscriptionRoute({

  children,

}) {

  // =========================
  // STATES
  // =========================

  const [loading, setLoading] =
  useState(true);

  const [allowed, setAllowed] =
  useState(false);




  // =========================
  // LOAD
  // =========================

  useEffect(() => {

    checkSubscription();

  }, []);




  // =========================
  // CHECK SUBSCRIPTION
  // =========================

  const checkSubscription =
  async () => {

    try {

      // =========================
      // API
      // =========================

      const response =
      await api.get(

        "/api/subscription"

      );




      // =========================
      // ACTIVE CHECK
      // =========================

      if (

        response.data.status ===
        "Active"

      ) {

        setAllowed(true);

      }

    } catch (error) {

      console.log(

        "SUBSCRIPTION ERROR:",

        error.response?.data ||

        error.message

      );

    } finally {

      setLoading(false);

    }

  };




  // =========================
  // LOADING SCREEN
  // =========================

  if (loading) {

    return (

      <div className="h-screen flex items-center justify-center bg-[#050816] text-white">

        Checking Subscription...

      </div>

    );

  }




  // =========================
  // NO SUBSCRIPTION
  // =========================

  if (!allowed) {

    return <Navigate to="/subscription" />;

  }




  // =========================
  // ACCESS GRANTED
  // =========================

  return children;

}

