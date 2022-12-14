import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MMouse: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-quaternary"
          d="M13,2.08008a6.2838,6.2838,0,0,0-2,0A6.9951,6.9951,0,0,0,5,9v6a7,7,0,0,0,14,0V9A6.9951,6.9951,0,0,0,13,2.08008Z"
        ></path>
        <path
          className="uim-tertiary"
          d="M5 9v2.00073h7V2A7.00848 7.00848 0 0 0 5 9zM19 9v2.00073H12V2A7.00849 7.00849 0 0 1 19 9z"
        ></path>
        <rect
          width="14"
          height="2"
          x="5"
          y="10.001"
          className="uim-primary"
        ></rect>
        <path
          className="uim-primary"
          d="M13,2.08008V11H11V2.08008a6.2838,6.2838,0,0,1,2,0Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
