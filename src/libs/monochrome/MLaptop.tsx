import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MLaptop: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M19,16H5a.99943.99943,0,0,1-1-1V7A3.00328,3.00328,0,0,1,7,4H17a3.00328,3.00328,0,0,1,3,3v8A.99943.99943,0,0,1,19,16Z"
        ></path>
        <path
          className="uim-primary"
          d="M19,20H5a3.00328,3.00328,0,0,1-3-3V15a.99943.99943,0,0,1,1-1H21a.99943.99943,0,0,1,1,1v2A3.00328,3.00328,0,0,1,19,20Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
