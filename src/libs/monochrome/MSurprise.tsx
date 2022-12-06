import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MSurprise: React.FC<Props> = ({
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
        <circle cx="12" cy="12" r="10" className="uim-tertiary"></circle>
        <ellipse
          cx="12"
          cy="14.5"
          className="uim-primary"
          rx="2.25"
          ry="2.5"
        ></ellipse>
        <circle cx="15" cy="9" r="1" className="uim-primary"></circle>
        <circle cx="9" cy="9" r="1" className="uim-primary"></circle>
      </svg>
    </Wrapper>
  );
};
