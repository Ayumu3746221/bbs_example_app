import React from "react";
import BBSCard from "./BBSCard";

const BBSCardList = () => {
  return (
    <div className="p-4 grid lg:grid-cols-3 px-4 py-4 gap-4">
      <BBSCard></BBSCard>
      <BBSCard></BBSCard>
      <BBSCard></BBSCard>
    </div>
  );
};

export default BBSCardList;
