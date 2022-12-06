import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MSpin: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M13,21A11.01245,11.01245,0,0,1,2,10a1,1,0,0,1,2,0,9.01016,9.01016,0,0,0,9,9A7,7,0,0,0,13,5a5,5,0,0,0,0,10,3,3,0,0,0,0-6,1,1,0,0,0,0,2,1,1,0,0,1,0,2,3,3,0,0,1,0-6,5,5,0,0,1,0,10A7,7,0,0,1,13,3a9,9,0,0,1,0,18Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
