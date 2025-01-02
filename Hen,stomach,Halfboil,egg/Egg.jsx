import React from "react";
import HalfBoil from "./HalfBoil";

const Egg = ({ need }) => {
  return (
    <div>
      <h3>🥚</h3>
      <HalfBoil need={need} />
    </div>
  );
};

export default Egg;