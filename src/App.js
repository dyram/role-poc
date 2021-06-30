import React from "react";
import "antd/dist/antd.dark.css";

//components
import { HomePage } from "./pages/HomePage";
import { UserModel } from "./utils/User";
import { useEffect } from "react";
import { useState } from "react";

function App() {

  const [userLoading, setUserLoading] = useState(true);
  useEffect(() => {
    async function fetchUser() {
      const user = await UserModel.authenticate('shop1owner', 'password');
      if (user) {
        setUserLoading(false);
      }
    }
    fetchUser();
  }, []);
  return (
    <div style={{ padding: "3%" }}>
      {
        userLoading ? <h1>Loading...</h1> : <HomePage />
      }
    </div>
  );
}

export default App;
