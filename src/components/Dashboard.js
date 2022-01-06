import { getAuth, signOut } from "@firebase/auth";
import React, { useEffect } from "react";

const Dashboard = ({ history }) => {
  const logout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("token");
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      history.push("/");
    }
  }, []);

  const auth = getAuth();
  const user = auth.currentUser;

  return (
    <div>
      <p>{user && user.displayName}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
