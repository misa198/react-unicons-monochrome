import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MFileMinus: React.FC<Props> = ({
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
          d="M20 9H15a2 2 0 0 1-2-2V2zM14 16.00031H10a1 1 0 1 1 0-2h4a1 1 0 0 1 0 2z"
        ></path>
        <path
          className="uim-primary"
          d="M19,10.00031H15a3.00328,3.00328,0,0,1-3-3v-4a.99991.99991,0,0,1,1.707-.707l6,6a.99991.99991,0,0,1-.707,1.707ZM14,5.41437V7.00031a1.001,1.001,0,0,0,1,1h1.58594Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
