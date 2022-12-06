import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCommentLines: React.FC<Props> = ({
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
          d="M17 11H7A1 1 0 0 1 7 9H17a1 1 0 0 1 0 2zM13 15H7a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2z"
        ></path>
      </svg>
    </Wrapper>
  );
};
