import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MBorderAlt: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M3.5,20.5a.99974.99974,0,0,1-1-1V3.5a.99974.99974,0,0,1,1-1h16a1,1,0,0,1,0,2H4.5v15A.99974.99974,0,0,1,3.5,20.5Z"
        ></path>
        <circle cx="19.5" cy="11.5" r="1" className="uim-tertiary"></circle>
        <circle cx="19.5" cy="7.5" r="1" className="uim-tertiary"></circle>
        <circle cx="19.5" cy="15.5" r="1" className="uim-tertiary"></circle>
        <circle cx="7.5" cy="19.5" r="1" className="uim-tertiary"></circle>
        <circle cx="11.5" cy="19.5" r="1" className="uim-tertiary"></circle>
        <circle cx="15.5" cy="19.5" r="1" className="uim-tertiary"></circle>
        <circle cx="19.5" cy="19.5" r="1" className="uim-tertiary"></circle>
      </svg>
    </Wrapper>
  );
};