import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MWebSectionAlt: React.FC<Props> = ({
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
          className="uim-quaternary"
          d="M9.9,2H8.1C8.00154,2.32358,7.96757,2.66333,8,3v18c-0.03243,0.33667,0.00154,0.67642,0.1,1h1.8c0.09846-0.32358,0.13243-0.66333,0.1-1V3C10.03243,2.66333,9.99846,2.32358,9.9,2z"
        ></path>
        <path
          className="uim-primary"
          d="M3,2h5l0,0v20l0,0H3c-0.55228,0-1-0.44772-1-1V3C2,2.44772,2.44772,2,3,2z"
        ></path>
        <path
          className="uim-tertiary"
          d="M10,2h11c0.55228,0,1,0.44772,1,1v18c0,0.55228-0.44772,1-1,1H10l0,0V2L10,2z"
        ></path>
      </svg>
    </Wrapper>
  );
};
