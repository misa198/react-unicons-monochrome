import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MSimCard: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M17,20.5H7A3.50424,3.50424,0,0,1,3.5,17V7A3.50424,3.50424,0,0,1,7,3.5H17A3.50424,3.50424,0,0,1,20.5,7V17A3.50424,3.50424,0,0,1,17,20.5Z"
        ></path>
        <path
          className="uim-primary"
          d="M15.5,8.5v-5h-2v5h-3v-5h-2v6a1,1,0,0,0,1,1h11v-2Z"
        ></path>
        <polygon
          className="uim-primary"
          points="20.5 13.5 3.5 13.5 3.5 15.5 8.5 15.5 8.5 20.5 10.5 20.5 10.5 15.5 13.5 15.5 13.5 20.5 15.5 20.5 15.5 15.5 20.5 15.5 20.5 13.5"
        ></polygon>
      </svg>
    </Wrapper>
  );
};
