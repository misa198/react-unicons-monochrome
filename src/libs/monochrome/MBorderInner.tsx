import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MBorderInner: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M19.96484,13h-16a1,1,0,0,1,0-2h16a1,1,0,0,1,0,2Z"
        ></path>
        <path
          className="uim-primary"
          d="M11.96484,21a.99974.99974,0,0,1-1-1V4a1,1,0,0,1,2,0V20A.99973.99973,0,0,1,11.96484,21Z"
        ></path>
        <circle cx="3.964" cy="16" r="1" className="uim-tertiary"></circle>
        <circle cx="3.964" cy="20" r="1" className="uim-tertiary"></circle>
        <circle cx="3.964" cy="8" r="1" className="uim-tertiary"></circle>
        <circle cx="3.964" cy="4" r="1" className="uim-tertiary"></circle>
        <circle cx="7.964" cy="4" r="1" className="uim-tertiary"></circle>
        <circle cx="15.964" cy="4" r="1" className="uim-tertiary"></circle>
        <circle cx="7.964" cy="20" r="1" className="uim-tertiary"></circle>
        <circle cx="15.964" cy="20" r="1" className="uim-tertiary"></circle>
        <circle cx="19.964" cy="16" r="1" className="uim-tertiary"></circle>
        <circle cx="19.964" cy="20" r="1" className="uim-tertiary"></circle>
        <circle cx="19.964" cy="8" r="1" className="uim-tertiary"></circle>
        <circle cx="19.964" cy="4" r="1" className="uim-tertiary"></circle>
      </svg>
    </Wrapper>
  );
};
