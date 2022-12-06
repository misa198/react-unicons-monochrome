import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MBitcoinAlt: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M16.31256,11.2392A3.99779,3.99779,0,0,0,13,5V4a1,1,0,0,0-2,0V5H9V4A1,1,0,0,0,7,4V5H6A1,1,0,0,0,6,7H7V17H6a1,1,0,0,0,0,2H7v1a1,1,0,0,0,2,0V19h2v1a1,1,0,0,0,2,0V19h2a3.98966,3.98966,0,0,0,1.31256-7.7608ZM15,9a2.00229,2.00229,0,0,1-2,2H9V7h4A2.00229,2.00229,0,0,1,15,9Zm0,8H9V13h6a2,2,0,0,1,0,4Z"
        ></path>
      </svg>
    </Wrapper>
  );
};