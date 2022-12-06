import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MGrids: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M23,21V3a.99974.99974,0,0,0-1-1H17V22h5A.99974.99974,0,0,0,23,21Z"
        ></path>
        <path
          className="uim-primary"
          d="M1,3V21a.99974.99974,0,0,0,1,1H7V2H2A.99974.99974,0,0,0,1,3Z"
        ></path>
        <rect width="6" height="20" x="9" y="2" className="uim-tertiary"></rect>
        <rect
          width="2"
          height="20"
          x="7"
          y="2"
          className="uim-quaternary"
        ></rect>
        <rect
          width="2"
          height="20"
          x="15"
          y="2"
          className="uim-quaternary"
        ></rect>
      </svg>
    </Wrapper>
  );
};
