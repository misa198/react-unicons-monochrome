import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MArrowUp: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
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
          d="M12,18a.99974.99974,0,0,1-1-1V7a1,1,0,0,1,2,0V17A.99974.99974,0,0,1,12,18Z"
        ></path>
        <path
          className="uim-primary"
          d="M17,13a.99676.99676,0,0,1-.707-.293L12,8.41406,7.707,12.707A.99989.99989,0,0,1,6.293,11.293l5-5a.99962.99962,0,0,1,1.41406,0l5,5A1,1,0,0,1,17,13Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
