import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCornerUpRightAlt: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M16,14.5a1,1,0,0,1-.707-1.707l2.293-2.293L15.293,8.207A.99989.99989,0,0,1,16.707,6.793l3,3a.99962.99962,0,0,1,0,1.41406l-3,3A.99676.99676,0,0,1,16,14.5Z"
        ></path>
        <path
          className="uim-primary"
          d="M5,17.5a.99974.99974,0,0,1-1-1v-4a3.00328,3.00328,0,0,1,3-3H19a1,1,0,0,1,0,2H7a1.001,1.001,0,0,0-1,1v4A.99974.99974,0,0,1,5,17.5Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
