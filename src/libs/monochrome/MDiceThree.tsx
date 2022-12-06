import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MDiceThree: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M17,22H7a5.00588,5.00588,0,0,1-5-5V7A5.00588,5.00588,0,0,1,7,2H17a5.00588,5.00588,0,0,1,5,5V17A5.00588,5.00588,0,0,1,17,22Z"
        ></path>
        <circle cx="12" cy="12" r="1.5" className="uim-primary"></circle>
        <circle cx="16" cy="8" r="1.5" className="uim-primary"></circle>
        <circle cx="8" cy="16" r="1.5" className="uim-primary"></circle>
      </svg>
    </Wrapper>
  );
};
