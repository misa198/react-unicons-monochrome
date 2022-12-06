import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MDraggabledots: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        width="1em"
      >
        <circle cx="8.5" cy="12" r="2" className="uim-primary"></circle>
        <circle cx="8.5" cy="5" r="2" className="uim-primary"></circle>
        <circle cx="8.5" cy="19" r="2" className="uim-primary"></circle>
        <circle cx="15.5" cy="12" r="2" className="uim-primary"></circle>
        <circle cx="15.5" cy="5" r="2" className="uim-primary"></circle>
        <circle cx="15.5" cy="19" r="2" className="uim-primary"></circle>
      </svg>
    </Wrapper>
  );
};
