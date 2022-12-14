import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MSmile: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        width="1em"
      >
        <circle cx="12" cy="12" r="10" className="uim-tertiary"></circle>
        <path
          className="uim-primary"
          d="M12,17.0918a5.67258,5.67258,0,0,1-3.64258-1.32618.99954.99954,0,1,1,1.28516-1.53124,3.76605,3.76605,0,0,0,4.71484,0,.99954.99954,0,1,1,1.28516,1.53124A5.67258,5.67258,0,0,1,12,17.0918Z"
        ></path>
        <circle cx="15" cy="10" r="1" className="uim-primary"></circle>
        <circle cx="9" cy="10" r="1" className="uim-primary"></circle>
      </svg>
    </Wrapper>
  );
};
