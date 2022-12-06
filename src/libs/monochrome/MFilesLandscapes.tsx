import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MFilesLandscapes: React.FC<Props> = ({
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
          d="M18,10c-1.10457,0-2-0.89543-2-2V3H8C6.34315,3,5,4.34315,5,6v8c0,1.65685,1.34315,3,3,3h12c1.65685,0,3-1.34315,3-3v-4H18z"
        ></path>
        <path
          className="uim-quaternary"
          d="M8,17c-1.65686,0-3-1.34314-3-3V7H4c-1.65686,0-3,1.34314-3,3v8c0,1.65686,1.34314,3,3,3h12c1.65686,0,3-1.34314,3-3v-1H8z"
        ></path>
        <path
          className="uim-primary"
          d="M23,10h-5c-1.10457,0-2-0.89543-2-2V3L23,10z"
        ></path>
      </svg>
    </Wrapper>
  );
};
