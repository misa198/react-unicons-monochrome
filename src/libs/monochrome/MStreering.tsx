import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MStreering: React.FC<Props> = ({
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
          d="M16,14v-4H8v4c0,0.1,0,0.1,0,0.2c0.9,0.3,1.6,1,1.9,1.9c0.1,0,0.1,0,0.2,0h4c0.1,0,0.1,0,0.2,0c0.3-0.9,1-1.6,1.9-1.9C16,14.1,16,14.1,16,14C16,14,16,14,16,14z"
        ></path>
        <path
          className="uim-tertiary"
          d="M12,2C6.5,2,2,6.5,2,12c0,5.5,4.5,10,10,10c5.5,0,10-4.5,10-10C22,6.5,17.5,2,12,2z M14,19.7V18h-4v1.7C7.2,19,5,16.8,4.3,14H6v-4H4.3c0.9-3.4,4-6,7.7-6s6.8,2.6,7.7,6H18v4h1.7C19,16.8,16.8,19,14,19.7z"
        ></path>
        <circle cx="12" cy="13" r="1" className="uim-primary"></circle>
        <path
          className="uim-quaternary"
          d="M7,15c-0.6,0-1-0.4-1-1c0,0,0,0,0,0v-4c0-0.6,0.4-1,1-1s1,0.4,1,1v4C8,14.6,7.6,15,7,15C7,15,7,15,7,15z M17,15c-0.6,0-1-0.4-1-1c0,0,0,0,0,0v-4c0-0.6,0.4-1,1-1s1,0.4,1,1v4C18,14.6,17.6,15,17,15C17,15,17,15,17,15z M14,18h-4c-0.6,0-1-0.4-1-1s0.4-1,1-1h4c0.6,0,1,0.4,1,1S14.6,18,14,18z"
        ></path>
      </svg>
    </Wrapper>
  );
};
