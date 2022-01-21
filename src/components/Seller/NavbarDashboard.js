import React from "react";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";
import { initilizeFirebase } from "../SignUp/firebase";
import { useState } from "react";

const NavbarDashboard = () => {
  const app = initilizeFirebase();
  const db = getDatabase(app);
  const auth = getAuth(app);
  const SellerID = auth.currentUser.uid;
  const [Pic, setPic] = useState(null);
  const [Date, setDate] = useState("");
  const [StoreName, setStoreName] = useState("");

  const getStorePic = ref(db, "Sellers/" + SellerID + "/store_pic");
  onValue(
    getStorePic,
    (snapshot) => {
      const StorePic = snapshot.val();
      setPic(StorePic);
    },
    {
      onlyOnce: true,
    }
  );
  const getStoreDate = ref(db, "Sellers/" + SellerID + "/store_established");
  onValue(
    getStoreDate,
    (snapshot) => {
      const StoreDate = snapshot.val();
      setDate(StoreDate);
    },
    {
      onlyOnce: true,
    }
  );
  const getStoreName = ref(db, "Sellers/" + SellerID + "/store_name");
  onValue(
    getStoreName,
    (snapshot) => {
      const StoreName = snapshot.val();
      setStoreName(StoreName);
    },
    {
      onlyOnce: true,
    }
  );

  return (
    <div>
      <img
        src={Pic !== null ? Pic : require("../Seller/sellerProfile.png")}
        width={139}
      />
      <p>{StoreName}</p>
      <p>Joined on : {Date}</p>
    </div>
  );
};
export default NavbarDashboard;
