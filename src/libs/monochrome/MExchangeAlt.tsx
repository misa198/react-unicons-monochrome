import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MExchangeAlt: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M7 19a.99676.99676 0 0 1-.707-.293l-4-4A.99991.99991 0 0 1 3 13H17a1 1 0 0 1 0 2H5.41406l2.293 2.293A1 1 0 0 1 7 19zM21 11H7A1 1 0 0 1 7 9H18.58594L16.293 6.707A.99989.99989 0 0 1 17.707 5.293l4 4A.99991.99991 0 0 1 21 11z"
        ></path>
      </svg>
    </Wrapper>
  );
};
