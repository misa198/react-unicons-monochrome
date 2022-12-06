import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCommentDots: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <circle cx="12" cy="12" r="1" className="uim-primary"></circle>
        <path
          className="uim-tertiary"
          d="M12,2A10.00082,10.00082,0,0,0,4.25684,18.3291L2.293,20.293A.99991.99991,0,0,0,3,22h9A10,10,0,0,0,12,2ZM8,13a1,1,0,1,1,1-1A1,1,0,0,1,8,13Zm4,0a1,1,0,1,1,1-1A1,1,0,0,1,12,13Zm4,0a1,1,0,1,1,1-1A1,1,0,0,1,16,13Z"
        ></path>
        <circle cx="8" cy="12" r="1" className="uim-primary"></circle>
        <circle cx="16" cy="12" r="1" className="uim-primary"></circle>
      </svg>
    </Wrapper>
  );
};
