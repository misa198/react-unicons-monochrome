import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MExpandRight: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M14.82861,10.17188a1,1,0,0,1-.707-1.707L20.293,2.293A.99989.99989,0,1,1,21.707,3.707L15.53564,9.87891A.99676.99676,0,0,1,14.82861,10.17188Z"
        ></path>
        <path
          className="uim-tertiary"
          d="M14.82861,15.82812a.99675.99675,0,0,1-.707-.293L8.46436,9.87891A.99989.99989,0,1,1,9.87842,8.46484l5.65722,5.65625a1,1,0,0,1-.707,1.707Z"
        ></path>
        <path
          className="uim-primary"
          d="M3,22a1,1,0,0,1-.707-1.707l6.17139-6.17188a.99989.99989,0,0,1,1.41406,1.41407L3.707,21.707A.99676.99676,0,0,1,3,22Z"
        ></path>
        <path
          className="uim-primary"
          d="M7 22H3a.99974.99974 0 0 1-1-1V17a1 1 0 0 1 2 0v3H7a1 1 0 0 1 0 2zM21 8a.99974.99974 0 0 1-1-1V4H17a1 1 0 0 1 0-2h4a.99974.99974 0 0 1 1 1V7A.99974.99974 0 0 1 21 8z"
        ></path>
      </svg>
    </Wrapper>
  );
};
