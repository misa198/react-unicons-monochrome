import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MGolfBall: React.FC<Props> = ({
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
        <circle cx="14" cy="7" r="1" className="uim-primary"></circle>
        <circle cx="14" cy="10" r="1" className="uim-primary"></circle>
        <circle cx="17" cy="9" r="1" className="uim-primary"></circle>
      </svg>
    </Wrapper>
  );
};
