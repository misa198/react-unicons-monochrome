import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MBorderOut: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M20,21H4a.99943.99943,0,0,1-1-1V4A.99943.99943,0,0,1,4,3H20a.99943.99943,0,0,1,1,1V20A.99943.99943,0,0,1,20,21ZM5,19H19V5H5Z"
        ></path>
        <circle cx="12" cy="12" r="1" className="uim-tertiary"></circle>
        <circle cx="12" cy="16" r="1" className="uim-tertiary"></circle>
        <circle cx="12" cy="8" r="1" className="uim-tertiary"></circle>
        <circle cx="8" cy="12" r="1" className="uim-tertiary"></circle>
        <circle cx="16" cy="12" r="1" className="uim-tertiary"></circle>
      </svg>
    </Wrapper>
  );
};
