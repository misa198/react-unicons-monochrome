import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MEye: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M12,20c-4.09863,0-7.89893-2.91406-9.91846-7.60449a.99863.99863,0,0,1,0-.791C4.10107,6.91406,7.90137,4,12,4s7.89893,2.91406,9.91846,7.60449a.99863.99863,0,0,1,0,.791C19.89893,17.08594,16.09863,20,12,20Z"
        ></path>
        <path
          className="uim-primary"
          d="M12,16a4,4,0,1,1,4-4A4.00427,4.00427,0,0,1,12,16Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
