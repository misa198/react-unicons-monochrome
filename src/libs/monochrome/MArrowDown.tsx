import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MArrowDown: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
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
          d="M12,18a.99676.99676,0,0,1-.707-.293l-5-5A.99989.99989,0,0,1,7.707,11.293L12,15.58594l4.293-4.293A.99989.99989,0,0,1,17.707,12.707l-5,5A.99676.99676,0,0,1,12,18Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
