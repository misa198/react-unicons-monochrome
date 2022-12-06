import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MSkipForwardCircle: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M12,22A10,10,0,1,1,22,12,10.01177,10.01177,0,0,1,12,22Z"
        ></path>
        <path
          className="uim-primary"
          d="M15.5,17a.99943.99943,0,0,1-1-1V8a1,1,0,0,1,2,0v8A.99943.99943,0,0,1,15.5,17Z"
        ></path>
        <path
          className="uim-primary"
          d="M9.5,16.89062a2.00839,2.00839,0,0,1-2-2.00292V9.1123a2.00085,2.00085,0,0,1,3-1.73242l5,2.8877a2.00064,2.00064,0,0,1,0,3.46484l-5,2.8877A1.99618,1.99618,0,0,1,9.5,16.89062Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
