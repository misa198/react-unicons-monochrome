import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MVerticalAlignTop: React.FC<Props> = ({
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
          d="M13,22H7c-0.55214,0.00014-0.99986-0.44734-1-0.99948C6,21.00035,6,21.00017,6,21V3C5.99986,2.44786,6.44734,2.00014,6.99948,2C6.99965,2,6.99983,2,7,2h6c0.55214-0.00014,0.99986,0.44734,1,0.99948C14,2.99965,14,2.99983,14,3v18c0.00014,0.55214-0.44734,0.99986-0.99948,1C13.00035,22,13.00017,22,13,22z"
        ></path>
        <path
          className="uim-quaternary"
          d="M17,2h-4c0.55212-0.00012,0.99988,0.44733,1,0.99945C14,2.99963,14,2.99982,14,3v13h3c0.00018,0,0.00037,0,0.00055,0c0.55212-0.00012,0.99957-0.44788,0.99945-1V3c0-0.00018,0-0.00037,0-0.00055C17.99988,2.44733,17.55212,1.99988,17,2z"
        ></path>
        <path
          className="uim-primary"
          d="M21,4H3C2.44772,4,2,3.55228,2,3s0.44772-1,1-1h18c0.55228,0,1,0.44772,1,1S21.55228,4,21,4z"
        ></path>
      </svg>
    </Wrapper>
  );
};
