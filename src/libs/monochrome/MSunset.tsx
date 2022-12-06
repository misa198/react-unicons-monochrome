import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MSunset: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M15.33984,17H8.66016a.99859.99859,0,0,1-.73438-.32129A5.39971,5.39971,0,0,1,6.5,13a5.5,5.5,0,0,1,11,0,5.39971,5.39971,0,0,1-1.42578,3.67871A.99859.99859,0,0,1,15.33984,17Z"
        ></path>
        <path
          className="uim-quaternary"
          d="M12 6a.99974.99974 0 0 1-1-1V4a1 1 0 0 1 2 0V5A.99974.99974 0 0 1 12 6zM21 14H20a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zM4 14H3a1 1 0 0 1 0-2H4a1 1 0 0 1 0 2zM6.34326 8.34375a.99676.99676 0 0 1-.707-.293l-.707-.707A.99989.99989 0 0 1 6.34326 5.92969l.707.707a1 1 0 0 1-.707 1.707zM17.65674 8.34375a1 1 0 0 1-.707-1.707l.707-.707A.99989.99989 0 0 1 19.0708 7.34375l-.707.707A.99676.99676 0 0 1 17.65674 8.34375z"
        ></path>
        <path
          className="uim-primary"
          d="M11 21H8a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2zM16 21H15a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zM18 17H6a1 1 0 0 1 0-2H18a1 1 0 0 1 0 2z"
        ></path>
      </svg>
    </Wrapper>
  );
};
