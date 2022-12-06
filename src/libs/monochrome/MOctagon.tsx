import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MOctagon: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M15.728,22H8.272a1.00014,1.00014,0,0,1-.707-.293L2.293,16.43457a.99928.99928,0,0,1-.293-.707V8.27246a.99928.99928,0,0,1,.293-.707L7.56494,2.293A1.00014,1.00014,0,0,1,8.272,2H15.728a1.00014,1.00014,0,0,1,.707.293l5.272,5.27246a.99928.99928,0,0,1,.293.707v7.45508a.99928.99928,0,0,1-.293.707l-5.272,5.27246A1.00014,1.00014,0,0,1,15.728,22Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
