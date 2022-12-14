import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCommentAltDots: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M19,2H5A3.00328,3.00328,0,0,0,2,5V15a3.00328,3.00328,0,0,0,3,3H16.58594l3.707,3.707A.99991.99991,0,0,0,22,21V5A3.00328,3.00328,0,0,0,19,2ZM8,11a1,1,0,1,1,1-1A1,1,0,0,1,8,11Zm4,0a1,1,0,1,1,1-1A1,1,0,0,1,12,11Zm4,0a1,1,0,1,1,1-1A1,1,0,0,1,16,11Z"
        ></path>
        <circle cx="8" cy="10" r="1" className="uim-primary"></circle>
        <circle cx="12" cy="10" r="1" className="uim-primary"></circle>
        <circle cx="16" cy="10" r="1" className="uim-primary"></circle>
      </svg>
    </Wrapper>
  );
};
