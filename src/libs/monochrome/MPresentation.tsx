import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MPresentation: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M19,16H5a.99974.99974,0,0,1-1-1V3A.99974.99974,0,0,1,5,2H19a.99974.99974,0,0,1,1,1V15A.99974.99974,0,0,1,19,16Z"
        ></path>
        <path
          className="uim-primary"
          d="M21 4H3A1 1 0 0 1 3 2H21a1 1 0 0 1 0 2zM21 16H3a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2z"
        ></path>
        <path
          className="uim-primary"
          d="M12,22a.99974.99974,0,0,1-1-1V15a1,1,0,0,1,2,0v6A.99974.99974,0,0,1,12,22Z"
        ></path>
        <path
          className="uim-primary"
          d="M16.999,22a.99564.99564,0,0,1-.55078-.166l-5-3.30957a1,1,0,1,1,1.10352-1.668l5,3.30957A1,1,0,0,1,16.999,22Z"
        ></path>
        <path
          className="uim-primary"
          d="M7.001,22a1,1,0,0,1-.55274-1.834l5-3.30957a1,1,0,0,1,1.10352,1.668l-5,3.30957A.9945.9945,0,0,1,7.001,22Z"
        ></path>
      </svg>
    </Wrapper>
  );
};