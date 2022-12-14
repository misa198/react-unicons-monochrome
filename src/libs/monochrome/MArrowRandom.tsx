import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MArrowRandom: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M21,10a.99943.99943,0,0,1-1-1V4H15a1,1,0,0,1,0-2h6a.99943.99943,0,0,1,1,1V9A.99943.99943,0,0,1,21,10Z"
        ></path>
        <path
          className="uim-primary"
          d="M3 22a1 1 0 0 1-.707-1.707l18-18A.99989.99989 0 1 1 21.707 3.707l-18 18A.99676.99676 0 0 1 3 22zM21 22H15a1 1 0 0 1 0-2h5V15a1 1 0 0 1 2 0v6A.99943.99943 0 0 1 21 22z"
        ></path>
        <path
          className="uim-primary"
          d="M21 22a.99676.99676 0 0 1-.707-.293l-6.26465-6.26465a.99989.99989 0 0 1 1.41406-1.41406L21.707 20.293A1 1 0 0 1 21 22zM9.40625 10.27441a.99675.99675 0 0 1-.707-.293L2.4248 3.707A.99989.99989 0 1 1 3.83887 2.293l6.27441 6.27441a1 1 0 0 1-.707 1.707z"
        ></path>
      </svg>
    </Wrapper>
  );
};
