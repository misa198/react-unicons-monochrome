import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MItalic: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        width="1em"
      >
        <path
          className="uim-primary"
          d="M17,6H11a1,1,0,0,0,0,2h1.52283l-3.2,8H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2H11.47717l3.2-8H17a1,1,0,0,0,0-2Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
