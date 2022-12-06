import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MBorderClear: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <circle cx="12" cy="16" r="1" className="uim-tertiary"></circle>
        <circle cx="12" cy="20" r="1" className="uim-tertiary"></circle>
        <circle cx="12" cy="8" r="1" className="uim-tertiary"></circle>
        <circle cx="12" cy="4" r="1" className="uim-tertiary"></circle>
        <circle cx="4" cy="16" r="1" className="uim-tertiary"></circle>
        <circle cx="4" cy="20" r="1" className="uim-tertiary"></circle>
        <circle cx="4" cy="8" r="1" className="uim-tertiary"></circle>
        <circle cx="4" cy="4" r="1" className="uim-tertiary"></circle>
        <circle cx="8" cy="4" r="1" className="uim-tertiary"></circle>
        <circle cx="16" cy="4" r="1" className="uim-tertiary"></circle>
        <circle cx="8" cy="20" r="1" className="uim-tertiary"></circle>
        <circle cx="16" cy="20" r="1" className="uim-tertiary"></circle>
        <circle cx="8" cy="12" r="1" className="uim-tertiary"></circle>
        <circle cx="16" cy="12" r="1" className="uim-tertiary"></circle>
        <circle cx="20" cy="16" r="1" className="uim-tertiary"></circle>
        <circle cx="20" cy="20" r="1" className="uim-tertiary"></circle>
        <circle cx="20" cy="8" r="1" className="uim-tertiary"></circle>
        <circle cx="12" cy="12" r="1" className="uim-tertiary"></circle>
        <circle cx="4" cy="12" r="1" className="uim-tertiary"></circle>
        <circle cx="20" cy="12" r="1" className="uim-tertiary"></circle>
        <circle cx="20" cy="4" r="1" className="uim-tertiary"></circle>
      </svg>
    </Wrapper>
  );
};
