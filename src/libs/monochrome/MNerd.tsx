import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MNerd: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        width="1em"
      >
        <circle cx="12" cy="12" r="10" className="uim-tertiary"></circle>
        <path
          className="uim-primary"
          d="M12 17.0918a5.68094 5.68094 0 0 1-3.64258-1.3252 1.00029 1.00029 0 1 1 1.28516-1.5332 3.76085 3.76085 0 0 0 4.71484 0 1.00029 1.00029 0 0 1 1.28516 1.5332A5.68094 5.68094 0 0 1 12 17.0918zM6.76953 10H3.5a1 1 0 0 1 0-2H6.76953a1 1 0 0 1 0 2zM20.48047 10h-3.25a1 1 0 0 1 0-2h3.25a1 1 0 0 1 0 2z"
        ></path>
        <circle cx="15.5" cy="10" r="2" className="uim-primary"></circle>
        <path
          className="uim-primary"
          d="M15.5,13a3,3,0,1,1,3-3A3.00328,3.00328,0,0,1,15.5,13Zm0-4a1,1,0,1,0,1,1A1.00067,1.00067,0,0,0,15.5,9Z"
        ></path>
        <circle cx="8.5" cy="10" r="2" className="uim-primary"></circle>
        <path
          className="uim-primary"
          d="M8.5,13a3,3,0,1,1,3-3A3.00328,3.00328,0,0,1,8.5,13Zm0-4a1,1,0,1,0,1,1A1.00067,1.00067,0,0,0,8.5,9Z"
        ></path>
        <path
          className="uim-primary"
          d="M12.75293,10.35156a1.01272,1.01272,0,0,0-1.50586,0l-1.5332-1.2832a2.98017,2.98017,0,0,1,4.57226,0Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
