import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MArchive: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M21 10H3A1 1 0 0 1 2 9V6A3.00328 3.00328 0 0 1 5 3H19a3.00328 3.00328 0 0 1 3 3V9A1 1 0 0 1 21 10zM14 14H10a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2z"
        ></path>
        <path
          className="uim-tertiary"
          d="M4,10v8a3.00328,3.00328,0,0,0,3,3H17a3.00328,3.00328,0,0,0,3-3V10Zm10,4H10a1,1,0,0,1,0-2h4a1,1,0,0,1,0,2Z"
        ></path>
      </svg>
    </Wrapper>
  );
};