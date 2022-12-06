import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MYen: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M18.55469,2.168a.999.999,0,0,0-1.38672.27734L12,10.19727l-5.168-7.752A1,1,0,1,0,5.168,3.55469L10.13153,11H7a1,1,0,0,0,0,2h4v2H7a1,1,0,0,0,0,2h4v4a1,1,0,0,0,2,0V17h4a1,1,0,0,0,0-2H13V13h4a1,1,0,0,0,0-2H13.86847L18.832,3.55469A1.00017,1.00017,0,0,0,18.55469,2.168Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
