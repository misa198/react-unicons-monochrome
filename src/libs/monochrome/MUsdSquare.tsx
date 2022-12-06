import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MUsdSquare: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M13,11H11a1,1,0,0,1,0-2h4a1,1,0,0,0,0-2H13V6a1,1,0,0,0-2,0V7a3,3,0,0,0,0,6h2a1,1,0,0,1,0,2H9a1,1,0,0,0,0,2h2v1a1,1,0,0,0,2,0V17a3,3,0,0,0,0-6Z"
        ></path>
        <path
          className="uim-tertiary"
          d="M19,2H5A3.00328,3.00328,0,0,0,2,5V19a3.00328,3.00328,0,0,0,3,3H19a3.00328,3.00328,0,0,0,3-3V5A3.00328,3.00328,0,0,0,19,2Zm-8,9h2a3,3,0,0,1,0,6v1a1,1,0,0,1-2,0V17H9a1,1,0,0,1,0-2h4a1,1,0,0,0,0-2H11a3,3,0,0,1,0-6V6a1,1,0,0,1,2,0V7h2a1,1,0,0,1,0,2H11a1,1,0,0,0,0,2Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
