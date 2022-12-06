import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MPound: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M20,20H7.97443A4.95169,4.95169,0,0,0,9,17V14h6a1,1,0,0,0,0-2H9V8.89453a4.89483,4.89483,0,0,1,9.13379-2.44726,1.00016,1.00016,0,1,0,1.73242-1A6.89506,6.89506,0,0,0,7,8.89453V12H4a1,1,0,0,0,0,2H7v3a3.00328,3.00328,0,0,1-3,3,1,1,0,0,0,0,2H20a1,1,0,0,0,0-2Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
