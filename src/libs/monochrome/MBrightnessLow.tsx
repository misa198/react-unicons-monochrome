import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MBrightnessLow: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <circle cx="3" cy="12" r="1" className="uim-tertiary"></circle>
        <circle cx="21" cy="12" r="1" className="uim-tertiary"></circle>
        <circle cx="12" cy="3" r="1" className="uim-tertiary"></circle>
        <circle cx="12" cy="21" r="1" className="uim-tertiary"></circle>
        <circle cx="18.364" cy="5.636" r="1" className="uim-tertiary"></circle>
        <circle cx="5.636" cy="18.364" r="1" className="uim-tertiary"></circle>
        <circle cx="5.636" cy="5.636" r="1" className="uim-tertiary"></circle>
        <circle cx="18.364" cy="18.364" r="1" className="uim-tertiary"></circle>
        <circle cx="12" cy="12" r="6" className="uim-primary"></circle>
      </svg>
    </Wrapper>
  );
};
