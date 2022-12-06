import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MBitcoinCircle: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <rect
          width="22"
          height="22"
          x="1"
          y="1"
          className="uim-tertiary"
          rx="11"
        ></rect>
        <path
          className="uim-primary"
          d="M17,10a3.00328,3.00328,0,0,0-3-3V6a1,1,0,0,0-2,0V7H11V6A1,1,0,0,0,9,6V7H8A1,1,0,0,0,8,9H9v6H8a1,1,0,0,0,0,2H9v1a1,1,0,0,0,2,0V17h1v1a1,1,0,0,0,2,0V17a2.99864,2.99864,0,0,0,2.23438-5A2.99008,2.99008,0,0,0,17,10Zm-3,5H11V13h3a1,1,0,0,1,0,2Zm0-4H11V9h3a1,1,0,0,1,0,2Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
