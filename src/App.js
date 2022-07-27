import { useState } from "react";
import "./App.css";
import Banner from "./Banner/Banner";
import Header from "./Header/Header";
import Posts from "./Posts/Posts";

function App() {
   const [user, setUser] = useState(false);
   const addUser = () => {
      setUser(true);
   };
   const logOut = () => {
      setUser(false);
   };

   return (
      <div>
         <Header user={user} logout={logOut} addUser={addUser}></Header>
         <Banner></Banner>
         <Posts user={user}></Posts>
      </div>
   );
}

export default App;
