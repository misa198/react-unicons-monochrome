import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MSave: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        width="1em"
      >
        <path
          className="uim-tertiary"
          d="M20.707,9.293,15,3.58594V8a1,1,0,0,1-1,1H8A1,1,0,0,1,7,8V3H6A3.00328,3.00328,0,0,0,3,6V18a3.00328,3.00328,0,0,0,3,3H18a3.00328,3.00328,0,0,0,3-3V10A1.00012,1.00012,0,0,0,20.707,9.293Z"
        ></path>
        <path
          className="uim-primary"
          d="M17,21H7V16a3,3,0,0,1,3-3h4a3,3,0,0,1,3,3Z"
        ></path>
        <path
          className="uim-quaternary"
          d="M8,9h6a1,1,0,0,0,1-1V3.58594l-.293-.293A1.00012,1.00012,0,0,0,14,3H7V8A1,1,0,0,0,8,9Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
