import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MLeftArrowFromLeft: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M7,17a.99676.99676,0,0,1-.707-.293l-4-4a.99962.99962,0,0,1,0-1.41406l4-4A.99989.99989,0,0,1,7.707,8.707L4.41406,12l3.293,3.293A1,1,0,0,1,7,17Z"
        ></path>
        <path
          className="uim-primary"
          d="M17,13H3a1,1,0,0,1,0-2H17a1,1,0,0,1,0,2Z"
        ></path>
        <path
          className="uim-tertiary"
          d="M21,20a.99974.99974,0,0,1-1-1V5a1,1,0,0,1,2,0V19A.99974.99974,0,0,1,21,20Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
