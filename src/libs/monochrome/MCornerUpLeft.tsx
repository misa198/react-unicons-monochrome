import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCornerUpLeft: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M14.68555,6.62842h-6.957L10.6499,3.707A.99989.99989,0,0,0,9.23584,2.293L4.60773,6.92108a1.00349,1.00349,0,0,0,0,1.41467l4.62811,4.62861a.99989.99989,0,0,0,1.41406-1.41407L7.72839,8.62842h6.95716a3.00328,3.00328,0,0,1,3,3V21a1,1,0,0,0,2,0V11.62842A5.00589,5.00589,0,0,0,14.68555,6.62842Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
