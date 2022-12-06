import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MMedicalSquareFull: React.FC<Props> = ({
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
          d="M19,22H5c-1.7,0-3-1.3-3-3V5c0-1.7,1.3-3,3-3h14c1.7,0,3,1.3,3,3v14C22,20.7,20.7,22,19,22z"
        ></path>
        <polygon
          className="uim-primary"
          points="17 10 14 10 14 7 10 7 10 10 7 10 7 14 10 14 10 17 14 17 14 14 17 14"
        ></polygon>
        <path
          className="uim-primary"
          d="M14,18h-4c-0.6,0-1-0.4-1-1v-2H7c-0.6,0-1-0.4-1-1v-4c0-0.6,0.4-1,1-1h2V7c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1v2h2c0.6,0,1,0.4,1,1v4c0,0.6-0.4,1-1,1h-2v2C15,17.6,14.6,18,14,18z M11,16h2v-2c0-0.6,0.4-1,1-1h2v-2h-2c-0.6,0-1-0.4-1-1V8h-2v2c0,0.6-0.4,1-1,1H8v2h2c0.6,0,1,0.4,1,1V16z"
        ></path>
      </svg>
    </Wrapper>
  );
};
