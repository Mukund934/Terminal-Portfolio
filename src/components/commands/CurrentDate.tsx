import React from "react";
import { Wrapper } from "../styles/Output.styled";

const CurrentDate: React.FC = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Wrapper>
      <span>{formattedDate}</span>
    </Wrapper>
  );
};

export default CurrentDate;
