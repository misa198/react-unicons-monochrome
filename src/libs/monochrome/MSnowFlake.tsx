import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MSnowFlake: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M12,22a.99974.99974,0,0,1-1-1V3a1,1,0,0,1,2,0V21A.99974.99974,0,0,1,12,22Z"
        ></path>
        <path
          className="uim-primary"
          d="M21 13H3a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2zM12 8a.99676.99676 0 0 1-.707-.293l-3-3A.99989.99989 0 0 1 9.707 3.293L12 5.58594l2.293-2.293A.99989.99989 0 0 1 15.707 4.707l-3 3A.99676.99676 0 0 1 12 8zM15 21a.99676.99676 0 0 1-.707-.293L12 18.41406 9.707 20.707A.99989.99989 0 0 1 8.293 19.293l3-3a.99962.99962 0 0 1 1.41406 0l3 3A1 1 0 0 1 15 21z"
        ></path>
        <path
          className="uim-primary"
          d="M20 16a.99676.99676 0 0 1-.707-.293l-3-3a.99962.99962 0 0 1 0-1.41406l3-3A.99989.99989 0 0 1 20.707 9.707L18.41406 12l2.293 2.293A1 1 0 0 1 20 16zM4 16a1 1 0 0 1-.707-1.707L5.58594 12 3.293 9.707A.99989.99989 0 0 1 4.707 8.293l3 3a.99962.99962 0 0 1 0 1.41406l-3 3A.99676.99676 0 0 1 4 16z"
        ></path>
        <path
          className="uim-primary"
          d="M8,17a1,1,0,0,1-.707-1.707L10.58594,12,7.293,8.707A.99989.99989,0,0,1,8.707,7.293l4,4a.99962.99962,0,0,1,0,1.41406l-4,4A.99676.99676,0,0,1,8,17Z"
        ></path>
        <path
          className="uim-primary"
          d="M16,17a.99676.99676,0,0,1-.707-.293l-4-4a.99962.99962,0,0,1,0-1.41406l4-4A.99989.99989,0,0,1,16.707,8.707L13.41406,12l3.293,3.293A1,1,0,0,1,16,17Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
