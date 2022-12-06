import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MMouseAlt2: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M13,2.08008a6.2838,6.2838,0,0,0-2,0A6.9951,6.9951,0,0,0,5,9v6a7,7,0,0,0,14,0V9A6.9951,6.9951,0,0,0,13,2.08008Z"
        ></path>
        <path
          className="uim-primary"
          d="M13,2.08008V12a1,1,0,0,1-2,0V2.08008a6.2838,6.2838,0,0,1,2,0Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
