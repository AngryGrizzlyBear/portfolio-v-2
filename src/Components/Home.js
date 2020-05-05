import React from "react";
import Header from "./Header";
import Information from "./InformationInfo";
import { content } from "../Data/content";

function Home() {
  return (
    <div>
      <Header />
      <Information paragraph={content.home.introduction} />
    </div>
  );
}

export default Home;
