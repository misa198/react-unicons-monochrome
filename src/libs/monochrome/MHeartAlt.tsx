import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MHeartAlt: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M12,21.22754a.99676.99676,0,0,1-.707-.293L3.83691,13.47949A6.27234,6.27234,0,0,1,12,4a6.27234,6.27234,0,0,1,8.16309,9.47949L12.707,20.93457A.99676.99676,0,0,1,12,21.22754Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
