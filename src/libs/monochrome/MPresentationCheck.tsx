import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MPresentationCheck: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M19,16H5a.99943.99943,0,0,1-1-1V3A.99943.99943,0,0,1,5,2H19a.99943.99943,0,0,1,1,1V15A.99943.99943,0,0,1,19,16Z"
        ></path>
        <path
          className="uim-primary"
          d="M11 12a.99676.99676 0 0 1-.707-.293l-2-2A.99989.99989 0 0 1 9.707 8.293L11 9.58594l3.293-3.293A.99989.99989 0 0 1 15.707 7.707l-4 4A.99676.99676 0 0 1 11 12zM21 4H3A1 1 0 0 1 3 2H21a1 1 0 0 1 0 2zM21 16H3a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2z"
        ></path>
        <path
          className="uim-primary"
          d="M12,22a.99943.99943,0,0,1-1-1V15a1,1,0,0,1,2,0v6A.99943.99943,0,0,1,12,22Z"
        ></path>
        <path
          className="uim-primary"
          d="M16.999,22a.99564.99564,0,0,1-.55078-.166l-5-3.30957a1,1,0,1,1,1.10352-1.668l5,3.30957A1,1,0,0,1,16.999,22Z"
        ></path>
        <path
          className="uim-primary"
          d="M7.001,22a1,1,0,0,1-.55274-1.834l5-3.30957a1,1,0,0,1,1.10352,1.668l-5,3.30957A.99564.99564,0,0,1,7.001,22Z"
        ></path>
      </svg>
    </Wrapper>
  );
};