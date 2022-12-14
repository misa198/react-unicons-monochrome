import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MAwardAlt: React.FC<Props> = ({
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
          d="M12,19c-0.6,0-1-0.4-1-1v-4c0-0.6,0.4-1,1-1s1,0.4,1,1v4C13,18.6,12.6,19,12,19z"
        ></path>
        <path
          className="uim-tertiary"
          d="M13,14.9V18c0,0.6-0.4,1-1,1s-1-0.4-1-1v-3.1c-1.5-0.2-2.9-0.9-4-2V22c0,0.6,0.4,1,1,1c0.2,0,0.3,0,0.4-0.1l3.6-1.8l3.6,1.8c0.5,0.2,1.1,0,1.3-0.4C17,22.3,17,22.2,17,22v-9.1C15.9,14,14.5,14.7,13,14.9z"
        ></path>
        <circle cx="12" cy="8" r="7" className="uim-primary"></circle>
      </svg>
    </Wrapper>
  );
};
