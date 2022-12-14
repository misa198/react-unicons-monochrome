import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MNA: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M12 20a.99943.99943 0 0 1-1-1V5a1 1 0 0 1 2 0V19A.99943.99943 0 0 1 12 20zM8 18a.99958.99958 0 0 1-.89453-.55273L4 11.23633V17a1 1 0 0 1-2 0V7a1 1 0 0 1 1.89453-.44727L7 12.76367V7A1 1 0 0 1 9 7V17a1.00153 1.00153 0 0 1-.77051.97363A1.02166 1.02166 0 0 1 8 18zM19 6H18a3.00328 3.00328 0 0 0-3 3v8a1 1 0 0 0 2 0V13h3v4a1 1 0 0 0 2 0V9A3.00328 3.00328 0 0 0 19 6zm-2 5V9a1.00067 1.00067 0 0 1 1-1h1a1.00067 1.00067 0 0 1 1 1v2z"
        ></path>
      </svg>
    </Wrapper>
  );
};
