import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MToggleOff: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        viewBox="0 0 24 24"
        width="1em"
      >
        <path
          className="uim-tertiary"
          d="M16.5,17.5h-9C4.46243,17.5,2,15.03757,2,12s2.46243-5.5,5.5-5.5h9c3.03757,0,5.5,2.46243,5.5,5.5S19.53757,17.5,16.5,17.5z"
        ></path>
        <circle cx="7.5" cy="12" r="2.5" className="uim-primary"></circle>
      </svg>
    </Wrapper>
  );
};
