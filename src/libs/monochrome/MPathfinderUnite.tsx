import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MPathfinderUnite: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M21,22H8.53857a.99974.99974,0,0,1-1-1V16.46191H3a.99973.99973,0,0,1-1-1V3A.99974.99974,0,0,1,3,2H15.46143a.99974.99974,0,0,1,1,1V7.53809H21a.99973.99973,0,0,1,1,1V21A.99974.99974,0,0,1,21,22Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
