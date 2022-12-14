import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MMonitor: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M15.23,22H8.77a1.99795,1.99795,0,0,1-1.71484-3.02832L8.5415,16.48633A1.00062,1.00062,0,0,1,9.3999,16h5.2002a1.00062,1.00062,0,0,1,.8584.48633l1.48974,2.49023A1.99837,1.99837,0,0,1,15.23,22Z"
        ></path>
        <path
          className="uim-quaternary"
          d="M19,18H5a3.00328,3.00328,0,0,1-3-3V5A3.00328,3.00328,0,0,1,5,2H19a3.00328,3.00328,0,0,1,3,3V15A3.00328,3.00328,0,0,1,19,18Z"
        ></path>
        <path
          className="uim-primary"
          d="M19,18H5a3,3,0,0,1-3-3V13H22v2A3,3,0,0,1,19,18Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
