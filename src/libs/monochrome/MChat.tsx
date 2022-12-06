import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MChat: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M12,22a.99749.99749,0,0,1-.707-.293L8.58594,19H6a3.00328,3.00328,0,0,1-3-3V5A3.00328,3.00328,0,0,1,6,2H18a3.00328,3.00328,0,0,1,3,3V16a3.00328,3.00328,0,0,1-3,3H15.87012l-3.21973,2.75879A.99513.99513,0,0,1,12,22Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
