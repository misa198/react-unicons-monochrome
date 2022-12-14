import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MFocusAdd: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M8 22H5a3.00328 3.00328 0 0 1-3-3V16a1 1 0 0 1 2 0v3a1.00067 1.00067 0 0 0 1 1H8a1 1 0 0 1 0 2zM3 9A.99943.99943 0 0 1 2 8V5A3.00328 3.00328 0 0 1 5 2H8A1 1 0 0 1 8 4H5A1.00067 1.00067 0 0 0 4 5V8A.99943.99943 0 0 1 3 9z"
        ></path>
        <path
          className="uim-primary"
          d="M15,11H13V9a1,1,0,0,0-2,0v2H9a1,1,0,0,0,0,2h2v2a1,1,0,0,0,2,0V13h2a1,1,0,0,0,0-2Z"
        ></path>
        <path
          className="uim-tertiary"
          d="M21 9a.99943.99943 0 0 1-1-1V5a1.00067 1.00067 0 0 0-1-1H16a1 1 0 0 1 0-2h3a3.00328 3.00328 0 0 1 3 3V8A.99943.99943 0 0 1 21 9zM19 22H16a1 1 0 0 1 0-2h3a1.00067 1.00067 0 0 0 1-1V16a1 1 0 0 1 2 0v3A3.00328 3.00328 0 0 1 19 22z"
        ></path>
      </svg>
    </Wrapper>
  );
};
