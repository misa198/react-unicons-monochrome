import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MBowlingBall: React.FC<Props> = ({
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
        <path
          className="uim-tertiary"
          d="M12,22A10,10,0,1,1,22,12,10.01177,10.01177,0,0,1,12,22Z"
        ></path>
        <circle cx="11" cy="7" r="1" className="uim-primary"></circle>
        <circle cx="11" cy="11" r="1" className="uim-primary"></circle>
        <circle cx="8" cy="9" r="1" className="uim-primary"></circle>
      </svg>
    </Wrapper>
  );
};
