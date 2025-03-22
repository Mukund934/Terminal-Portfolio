import React, { useEffect } from "react";
import { Wrapper } from "../styles/Output.styled";

const Exit: React.FC = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.close();
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Wrapper>
      <span>Exiting terminal portfolio... Goodbye!</span>
    </Wrapper>
  );
};

export default Exit;
