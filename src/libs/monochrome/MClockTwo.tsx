import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MClockTwo: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <circle cx="12" cy="12" r="10" className="uim-tertiary"></circle>
        <path
          className="uim-primary"
          d="M11,7a1,1,0,0,1,2,0v3.26764l1.09766-.63385a1.00016,1.00016,0,0,1,1,1.73242l-2.59766,1.5A1.01383,1.01383,0,0,1,11,12Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
