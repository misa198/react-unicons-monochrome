import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MPackage: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M19,22H5a3.00328,3.00328,0,0,1-3-3V5A3.00328,3.00328,0,0,1,5,2H19a3.00328,3.00328,0,0,1,3,3V19A3.00328,3.00328,0,0,1,19,22Z"
        ></path>
        <path
          className="uim-primary"
          d="M15,10a.99945.99945,0,0,1-.55469-.168L12,8.20215,9.55469,9.832A.99992.99992,0,0,1,8,9V3A.99943.99943,0,0,1,9,2h6a.99943.99943,0,0,1,1,1V9a.99982.99982,0,0,1-1,1Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
