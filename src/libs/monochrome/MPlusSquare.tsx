import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MPlusSquare: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M17,11H13V7a1,1,0,0,0-2,0v4H7a1,1,0,0,0,0,2h4v4a1,1,0,0,0,2,0V13h4a1,1,0,0,0,0-2Z"
        ></path>
        <path
          className="uim-tertiary"
          d="M21,2H3A.99974.99974,0,0,0,2,3V21a.99974.99974,0,0,0,1,1H21a.99974.99974,0,0,0,1-1V3A.99974.99974,0,0,0,21,2ZM17,13H13v4a1,1,0,0,1-2,0V13H7a1,1,0,0,1,0-2h4V7a1,1,0,0,1,2,0v4h4a1,1,0,0,1,0,2Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
