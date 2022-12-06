import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MStepBackwardCircle: React.FC<Props> = ({
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
          d="M8.5,17a.99943.99943,0,0,1-1-1V8a1,1,0,0,1,2,0v8A.99943.99943,0,0,1,8.5,17Z"
        ></path>
        <path
          className="uim-primary"
          d="M14.5,16.89062a1.99618,1.99618,0,0,1-1-.2705l-5-2.8877a2.00064,2.00064,0,0,1,0-3.46484l5-2.8877a2.00085,2.00085,0,0,1,3,1.73242v5.7754a2.00839,2.00839,0,0,1-2,2.00292ZM9,11.13379H9Z"
        ></path>
      </svg>
    </Wrapper>
  );
};