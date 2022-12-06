import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MMinusSquare: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M16,13H8a1,1,0,0,1,0-2h8a1,1,0,0,1,0,2Z"
        ></path>
        <path
          className="uim-tertiary"
          d="M19,2H5A3.00328,3.00328,0,0,0,2,5V19a3.00328,3.00328,0,0,0,3,3H19a3.00328,3.00328,0,0,0,3-3V5A3.00328,3.00328,0,0,0,19,2ZM16,13H8a1,1,0,0,1,0-2h8a1,1,0,0,1,0,2Z"
        ></path>
      </svg>
    </Wrapper>
  );
};