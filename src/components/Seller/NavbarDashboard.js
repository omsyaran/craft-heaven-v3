import React from "react";
import sellerProfile from "../Seller/sellerProfile.png";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";
import { initilizeFirebase } from "../SignUp/firebase";

const NavbarDashboard = () => {
  const app = initilizeFirebase();
  const db = getDatabase(app);
  const auth = getAuth(app);
  const SellerID = auth.currentUser.uid;

  const getStorePic = ref(db, "Sellers/" + SellerID + "/store_pic");
  onValue(getStorePic, (snapshot) => {
    const StorePic = snapshot.val();
    dummy_function1(StorePic);
  });
  const getStoreDate = ref(db, "Sellers/" + SellerID + "/store_established");
  onValue(getStoreDate, (snapshot) => {
    const StoreDate = snapshot.val();
    dummy_function2(StoreDate);
  });

  function dummy_function1(StorePic) {
    alert(StorePic);
  }

  function dummy_function2(StoreDate) {
    alert(StoreDate);
  }

  return (
    <div>
      <img src={sellerProfile} width={139} />
      <p>Sivali Factory</p>
      <p>Joined on : 20 Feb 2020</p>
    </div>
  );
};
export default NavbarDashboard;
