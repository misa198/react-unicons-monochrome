import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MSignin: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        width="1em"
      >
        <path
          className="uim-primary"
          d="M19,11H13.41406l1.293-1.293A.99989.99989,0,0,0,13.293,8.293l-3,3a.99962.99962,0,0,0,0,1.41406l3,3A.99989.99989,0,0,0,14.707,14.293L13.41406,13H19a1,1,0,0,0,0-2Z"
        ></path>
        <path
          className="uim-tertiary"
          d="M13.41406,13l1.293,1.293A.99989.99989,0,1,1,13.293,15.707l-3-3a.99962.99962,0,0,1,0-1.41406l3-3A.99989.99989,0,0,1,14.707,9.707L13.41406,11H18V5a3.00328,3.00328,0,0,0-3-3H7A3.00328,3.00328,0,0,0,4,5V19a3.00328,3.00328,0,0,0,3,3h8a3.00328,3.00328,0,0,0,3-3V13Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
