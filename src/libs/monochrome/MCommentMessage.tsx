import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCommentMessage: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M17,13H7a1,1,0,0,1,0-2H17a1,1,0,0,1,0,2Z"
        ></path>
        <path
          className="uim-tertiary"
          d="M12,2A10.00082,10.00082,0,0,0,4.25684,18.3291L2.293,20.293A.99991.99991,0,0,0,3,22h9A10,10,0,0,0,12,2ZM9,7h6a1,1,0,0,1,0,2H9A1,1,0,0,1,9,7Zm6,10H9a1,1,0,0,1,0-2h6a1,1,0,0,1,0,2Zm2-4H7a1,1,0,0,1,0-2H17a1,1,0,0,1,0,2Z"
        ></path>
        <path
          className="uim-primary"
          d="M15 17H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zM15 9H9A1 1 0 0 1 9 7h6a1 1 0 0 1 0 2z"
        ></path>
      </svg>
    </Wrapper>
  );
};
