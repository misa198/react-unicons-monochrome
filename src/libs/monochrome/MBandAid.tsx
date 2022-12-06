import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MBandAid: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        viewBox="0 0 24 24"
        width="1em"
      >
        <path
          className="uim-tertiary"
          d="M4.46153,4.46395l0.00212-0.00212c1.94872-1.94872,5.10821-1.94872,7.05693,0l8.0193,8.0193c1.94872,1.94872,1.94872,5.10821,0,7.05693l-0.00212,0.00212c-1.94872,1.94872-5.10821,1.94872-7.05693,0l-8.0193-8.0193C2.51282,9.57216,2.51282,6.41266,4.46153,4.46395z"
        ></path>
        <path
          className="uim-primary"
          d="M19.05988 12.0011L19.06 12.00098l.47998-.47998c1.94958-1.94958 1.94958-5.11041 0-7.06-1.94952-1.94958-5.11041-1.94958-7.06 0L12 4.94098 11.99988 4.9411 19.05988 12.0011zM4.94086 12.00012L4.94 12.00098l-.47998.48004c-1.94958 1.94952-1.94958 5.11041 0 7.06 1.94952 1.94952 5.11041 1.94952 7.06 0L12 19.06097l.00085-.00085L4.94086 12.00012z"
        ></path>
        <circle cx="9.525" cy="12.001" r="1" className="uim-primary"></circle>
        <circle cx="12" cy="14.476" r="1" className="uim-primary"></circle>
        <circle cx="14.475" cy="12.001" r="1" className="uim-primary"></circle>
        <circle cx="12" cy="9.526" r="1" className="uim-primary"></circle>
      </svg>
    </Wrapper>
  );
};
