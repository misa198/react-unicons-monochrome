import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCheckSquare: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M10.2002,16.3999a.99676.99676,0,0,1-.707-.293L6.293,12.90723A.99989.99989,0,0,1,7.707,11.49316l2.49317,2.49268L16.293,7.89307A.99989.99989,0,0,1,17.707,9.30713l-6.7998,6.7998A.99676.99676,0,0,1,10.2002,16.3999Z"
        ></path>
        <path
          className="uim-tertiary"
          d="M21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM17.707,9.30713l-6.7998,6.7998a.99964.99964,0,0,1-1.41407,0L6.293,12.90723A.99989.99989,0,0,1,7.707,11.49316l2.49317,2.49268L16.293,7.89307A.99989.99989,0,0,1,17.707,9.30713Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
