import React from "react";
import "./Posts.css";
import PostHeader from "./PostHeader";
import Card1 from "./Card1";
import Card3 from "./Card3";
import Card2 from "./Card2";
import Card4 from "./Card4";

const Posts = () => {
   return (
      <div>
         <PostHeader></PostHeader>
         <Card1></Card1>
         <Card2></Card2>
         <Card3></Card3>
         <Card4></Card4>
      </div>
   );
};

export default Posts;
