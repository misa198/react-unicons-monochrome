import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCardAtm: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        viewBox="0 0 24 24"
        width="1em"
      >
        <circle cx="15.97" cy="13.5" r="2" className="uim-primary"></circle>
        <path
          className="uim-quaternary"
          d="M13.96997,13.5c0-0.50378,0.19257-0.95856,0.5-1.31024c-0.36658-0.41937-0.89917-0.68976-1.5-0.68976c-1.10455,0-2,0.89545-2,2s0.89545,2,2,2c0.60083,0,1.13342-0.27039,1.5-0.68976C14.16254,14.45856,13.96997,14.00378,13.96997,13.5z"
        ></path>
        <path
          className="uim-tertiary"
          d="M18.96997,5.5h-14c-1.10455,0-2,0.89545-2,2v9c0,1.10455,0.89545,2,2,2h14c1.10461,0,2-0.89545,2-2v-9C20.96997,6.39545,20.07458,5.5,18.96997,5.5z M15.96997,15.5c-0.60077,0-1.13342-0.27039-1.5-0.68976c-0.36658,0.41937-0.89917,0.68976-1.5,0.68976c-1.10455,0-2-0.89545-2-2s0.89545-2,2-2c0.60083,0,1.13342,0.27039,1.5,0.68976c0.36658-0.41937,0.89923-0.68976,1.5-0.68976c1.10461,0,2.00006,0.89545,2.00006,2S17.07458,15.5,15.96997,15.5z"
        ></path>
      </svg>
    </Wrapper>
  );
};
