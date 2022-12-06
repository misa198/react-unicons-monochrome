import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MDialpad: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <circle cx="12" cy="9" r="2" className="uim-tertiary"></circle>
        <circle cx="12" cy="3" r="2" className="uim-tertiary"></circle>
        <circle cx="12" cy="15" r="2" className="uim-tertiary"></circle>
        <circle cx="6" cy="9" r="2" className="uim-tertiary"></circle>
        <circle cx="6" cy="3" r="2" className="uim-tertiary"></circle>
        <circle cx="6" cy="15" r="2" className="uim-tertiary"></circle>
        <circle cx="18" cy="9" r="2" className="uim-tertiary"></circle>
        <circle cx="18" cy="3" r="2" className="uim-tertiary"></circle>
        <circle cx="18" cy="15" r="2" className="uim-tertiary"></circle>
        <circle cx="12" cy="21" r="2" className="uim-tertiary"></circle>
      </svg>
    </Wrapper>
  );
};
