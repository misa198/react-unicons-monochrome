import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MSilence: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
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
          d="M16,16H8a1,1,0,0,1,0-2h8a1,1,0,0,1,0,2Z"
        ></path>
        <path
          className="uim-primary"
          d="M12 17a.99974.99974 0 0 1-1-1V14a1 1 0 0 1 2 0v2A.99974.99974 0 0 1 12 17zM15 17a.99974.99974 0 0 1-1-1V14a1 1 0 0 1 2 0v2A.99974.99974 0 0 1 15 17zM9 17a.99974.99974 0 0 1-1-1V14a1 1 0 0 1 2 0v2A.99974.99974 0 0 1 9 17z"
        ></path>
        <circle cx="15" cy="10" r="1" className="uim-primary"></circle>
        <circle cx="9" cy="10" r="1" className="uim-primary"></circle>
      </svg>
    </Wrapper>
  );
};
