import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MShuffle: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M9,22H3a.99943.99943,0,0,1-1-1V15a1,1,0,0,1,2,0v5H9a1,1,0,0,1,0,2Z"
        ></path>
        <path
          className="uim-primary"
          d="M3 22a1 1 0 0 1-.707-1.707l18-18A.99989.99989 0 1 1 21.707 3.707l-18 18A.99676.99676 0 0 1 3 22zM3 10A.99943.99943 0 0 1 2 9V3A.99943.99943 0 0 1 3 2H9A1 1 0 0 1 9 4H4V9A.99943.99943 0 0 1 3 10z"
        ></path>
        <path
          className="uim-primary"
          d="M9.26465 10.26465a.99676.99676 0 0 1-.707-.293L2.293 3.707A.99989.99989 0 0 1 3.707 2.293L9.97168 8.55762a1 1 0 0 1-.707 1.707zM20.86816 22a.99678.99678 0 0 1-.707-.293l-6.27441-6.27441a.99989.99989 0 1 1 1.41406-1.41407L21.5752 20.293a1 1 0 0 1-.707 1.707z"
        ></path>
      </svg>
    </Wrapper>
  );
};
