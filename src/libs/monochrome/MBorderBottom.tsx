import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MBorderBottom: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M20,21.5H4a1,1,0,0,1,0-2H20a1,1,0,0,1,0,2Z"
        ></path>
        <circle cx="12" cy="16.5" r="1" className="uim-tertiary"></circle>
        <circle cx="12" cy="12.5" r="1" className="uim-tertiary"></circle>
        <circle cx="12" cy="8.5" r="1" className="uim-tertiary"></circle>
        <circle cx="12" cy="4.5" r="1" className="uim-tertiary"></circle>
        <circle cx="4" cy="16.5" r="1" className="uim-tertiary"></circle>
        <circle cx="4" cy="12.5" r="1" className="uim-tertiary"></circle>
        <circle cx="4" cy="8.5" r="1" className="uim-tertiary"></circle>
        <circle cx="4" cy="4.5" r="1" className="uim-tertiary"></circle>
        <circle cx="8" cy="4.5" r="1" className="uim-tertiary"></circle>
        <circle cx="16" cy="4.5" r="1" className="uim-tertiary"></circle>
        <circle cx="8" cy="12.5" r="1" className="uim-tertiary"></circle>
        <circle cx="16" cy="12.5" r="1" className="uim-tertiary"></circle>
        <circle cx="20" cy="16.5" r="1" className="uim-tertiary"></circle>
        <circle cx="20" cy="12.5" r="1" className="uim-tertiary"></circle>
        <circle cx="20" cy="8.5" r="1" className="uim-tertiary"></circle>
        <circle cx="20" cy="4.5" r="1" className="uim-tertiary"></circle>
      </svg>
    </Wrapper>
  );
};
