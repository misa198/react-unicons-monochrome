import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCommentInfo: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M12.00011,22h-9a.99991.99991,0,0,1-.707-1.707L4.257,18.3291A10.00061,10.00061,0,1,1,12.00011,22Z"
        ></path>
        <path
          className="uim-primary"
          d="M12,16a.99974.99974,0,0,1-1-1V12a1,1,0,0,1,2,0v3A.99974.99974,0,0,1,12,16Z"
        ></path>
        <circle cx="12" cy="9" r="1" className="uim-primary"></circle>
      </svg>
    </Wrapper>
  );
};
