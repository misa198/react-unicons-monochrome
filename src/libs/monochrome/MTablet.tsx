import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MTablet: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M17,22H7a3.00328,3.00328,0,0,1-3-3V5A3.00328,3.00328,0,0,1,7,2H17a3.00328,3.00328,0,0,1,3,3V19A3.00328,3.00328,0,0,1,17,22Z"
        ></path>
        <path
          className="uim-primary"
          d="M12,18a.99067.99067,0,0,1-.38037-.07031A1.448,1.448,0,0,1,11.29,17.71a.99108.99108,0,0,1-.21045-1.08984A1.03011,1.03011,0,0,1,11.29,16.29c.0498-.04.09961-.08008.1499-.12012a.74467.74467,0,0,1,.17969-.08984.65337.65337,0,0,1,.18017-.06055A1.0189,1.0189,0,0,1,12.71,16.29a1.15772,1.15772,0,0,1,.21.33008A.83792.83792,0,0,1,13,17a1.00814,1.00814,0,0,1-.29.71A.99183.99183,0,0,1,12,18Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
