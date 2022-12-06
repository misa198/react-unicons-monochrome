import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MArrowCircleLeft: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M11.293,7.293l-3.9997,3.99969a1.00354,1.00354,0,0,0,0,1.41468L11.293,16.707A.99989.99989,0,0,0,12.707,15.293L10.41406,13H16a1,1,0,0,0,0-2H10.41406l2.293-2.293A.99989.99989,0,0,0,11.293,7.293Z"
        ></path>
        <path
          className="uim-tertiary"
          d="M2,12A10,10,0,1,0,12,2,10.01114,10.01114,0,0,0,2,12ZM12.707,7.293a.99963.99963,0,0,1,0,1.41406L10.41406,11H16a1,1,0,0,1,0,2H10.41406l2.293,2.293A.99989.99989,0,0,1,11.293,16.707l-3.9997-3.99969a1.00354,1.00354,0,0,1,0-1.41468L11.293,7.293A.99962.99962,0,0,1,12.707,7.293Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
