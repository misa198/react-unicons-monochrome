import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MPentagon: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M17.56249,21.55957H6.43749a1,1,0,0,1-.95116-.69141L2.04883,10.28809A.99881.99881,0,0,1,2.41211,9.1709l9-6.53906a.99648.99648,0,0,1,1.17578,0l9,6.53906a.99881.99881,0,0,1,.36328,1.11719l-3.4375,10.58007A1,1,0,0,1,17.56249,21.55957Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
