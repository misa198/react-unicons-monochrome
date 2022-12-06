import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MDiamond: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        width="1em"
      >
        <path
          className="uim-primary"
          d="M4.82594,13.0373a2,2,0,0,1,0-2.1492l5.71223-7.27658a2,2,0,0,1,2.94911,0l5.68678,7.35118a2,2,0,0,1,0,2.1492l-5.71223,7.27658a2,2,0,0,1-2.94911,0Z"
        ></path>
        <path
          className="uim-primary"
          d="M11.9873,22.03711a3.00919,3.00919,0,0,1-2.21191-.97266L4.03516,13.64893C4.0166,13.62549,4,13.60107,3.9834,13.57568a2.99919,2.99919,0,0,1,0-3.22607L9.752,2.99365a3.06193,3.06193,0,0,1,4.47266-.0581l5.74023,7.41552a3.04033,3.04033,0,0,1,.52246,1.686,2.99275,2.99275,0,0,1-.4707,1.61328l-5.76855,7.356A3.039,3.039,0,0,1,11.9873,22.03711ZM5.64941,12.4668l5.6543,7.31006a1.10178,1.10178,0,0,0,1.4209-.064l5.66309-7.21875a1.05436,1.05436,0,0,0,.0996-.457.98828.98828,0,0,0-.15625-.53565L12.69629,4.22314a1.10178,1.10178,0,0,0-1.4209.064L5.6123,11.50586a1.05436,1.05436,0,0,0-.0996.457A.98963.98963,0,0,0,5.64941,12.4668Z"
        ></path>
      </svg>
    </Wrapper>
  );
};