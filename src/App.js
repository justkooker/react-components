import React from "react";

import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/Friends/FriendsList";
import Transaction from "./components/Transaction/Transactions";

import data from "./data/user.json";
import statistic from "./data/data.json";
import friends from "./data/friends.json";
import transactions from "./data/transaction.json";

function App() {
  return (
    <>
      <Profile data={data} />
      <Statistics statistic={statistic} />
      <FriendList friends={friends} />
      <Transaction transactions={transactions} />
    </>
  );
}

export default App;
