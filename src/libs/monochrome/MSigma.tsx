import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MSigma: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
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
          d="M16,18H8a.99991.99991,0,0,1-.707-1.707L11.58594,12,7.293,7.707A.99991.99991,0,0,1,8,6h8a1,1,0,0,1,0,2H10.41406l3.293,3.293a.99962.99962,0,0,1,0,1.41406L10.41406,16H16a1,1,0,0,1,0,2Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
