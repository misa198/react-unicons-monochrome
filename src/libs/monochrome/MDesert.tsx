import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MDesert: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M18,10a4,4,0,1,1,4-4A4.004,4.004,0,0,1,18,10Z"
        ></path>
        <path
          className="uim-primary"
          d="M15,22H3a1,1,0,0,1,0-2H15a1,1,0,0,1,0,2Z"
        ></path>
        <path
          className="uim-quaternary"
          d="M13 20V18a1 1 0 0 0-2 0v2zM3.55273 16.89453L7 18.61816V20H9V16.61816l3.44727-1.72363A1.0004 1.0004 0 0 0 13 14V10a1 1 0 0 0-2 0v3.38184l-2 1V8A1 1 0 0 0 7 8v8.38184l-2-1V13a1 1 0 0 0-2 0v3A1.0004 1.0004 0 0 0 3.55273 16.89453z"
        ></path>
      </svg>
    </Wrapper>
  );
};
