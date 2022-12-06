import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MBitcoinBold: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M17.618,12A3.98336,3.98336,0,0,0,15,5V3a1,1,0,0,0-2,0V5H11V3A1,1,0,0,0,9,3V5H6A1,1,0,0,0,6,7H7V17H6a1,1,0,0,0,0,2H9v2a1,1,0,0,0,2,0V19h2v2a1,1,0,0,0,2,0V19a3.98336,3.98336,0,0,0,2.618-7ZM12,7h3a2,2,0,0,1,0,4H9V7Zm3,10H9V13h6a2,2,0,0,1,0,4Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
