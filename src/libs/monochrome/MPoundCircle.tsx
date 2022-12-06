import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MPoundCircle: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <rect
          width="22"
          height="22"
          x="1"
          y="1"
          className="uim-tertiary"
          rx="11"
        ></rect>
        <path
          className="uim-primary"
          d="M16,15H10.81573A2.96544,2.96544,0,0,0,11,14V13h2.5a1,1,0,0,0,0-2H11V9.94727a1.94736,1.94736,0,0,1,3.63379-.97364,1.00016,1.00016,0,0,0,1.73242-1A3.94759,3.94759,0,0,0,9,9.94727V11H8a1,1,0,0,0,0,2H9v1a1.00067,1.00067,0,0,1-1,1,1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
