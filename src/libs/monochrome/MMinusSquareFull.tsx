import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MMinusSquareFull: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M17,13H7a1,1,0,0,1,0-2H17a1,1,0,0,1,0,2Z"
        ></path>
        <path
          className="uim-tertiary"
          d="M21,2H3A.99974.99974,0,0,0,2,3V21a.99974.99974,0,0,0,1,1H21a.99974.99974,0,0,0,1-1V3A.99974.99974,0,0,0,21,2ZM17,13H7a1,1,0,0,1,0-2H17a1,1,0,0,1,0,2Z"
        ></path>
      </svg>
    </Wrapper>
  );
};