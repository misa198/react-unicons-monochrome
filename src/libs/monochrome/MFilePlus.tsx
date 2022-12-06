import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MFilePlus: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M20,9,13,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3Z"
        ></path>
        <path
          className="uim-primary"
          d="M20 9H15a2 2 0 0 1-2-2V2zM14 14H13V13a1 1 0 0 0-2 0v1H10a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0V16h1a1 1 0 0 0 0-2z"
        ></path>
      </svg>
    </Wrapper>
  );
};
