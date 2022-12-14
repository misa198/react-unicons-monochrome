import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const M13Plus: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        width="1em"
      >
        <circle cx="12" cy="12" r="11" className="uim-tertiary"></circle>
        <path
          className="uim-primary"
          d="M8 18a.99943.99943 0 0 1-1-1V7A1 1 0 0 1 9 7V17A.99943.99943 0 0 1 8 18zM22 3H21V2a1 1 0 0 0-2 0V3H18a1 1 0 0 0 0 2h1V6a1 1 0 0 0 2 0V5h1a1 1 0 0 0 0-2z"
        ></path>
        <path
          className="uim-primary"
          d="M12,23A11,11,0,0,1,12,1a11.12456,11.12456,0,0,1,2.19922.21973,1.0005,1.0005,0,1,1-.39844,1.96093,8.99273,8.99273,0,1,0,7.01856,7.01856,1.0005,1.0005,0,1,1,1.96093-.39844A11.12456,11.12456,0,0,1,23,12,11.01245,11.01245,0,0,1,12,23Z"
        ></path>
        <path
          className="uim-primary"
          d="M18,9a3.00328,3.00328,0,0,0-3-3H14a3.00328,3.00328,0,0,0-3,3,1,1,0,0,0,2,0,1.00067,1.00067,0,0,1,1-1h1a1.00067,1.00067,0,0,1,1,1v1a1.00067,1.00067,0,0,1-1,1h-.5a1,1,0,0,0,0,2H15a1.00067,1.00067,0,0,1,1,1v1a1.00067,1.00067,0,0,1-1,1H14a1.00067,1.00067,0,0,1-1-1,1,1,0,0,0-2,0,3.00328,3.00328,0,0,0,3,3h1a3.00328,3.00328,0,0,0,3-3V14a2.97711,2.97711,0,0,0-.78027-2A2.97711,2.97711,0,0,0,18,10Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
