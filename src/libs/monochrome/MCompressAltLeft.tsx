import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCompressAltLeft: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M10.5,11.5a.99676.99676,0,0,1-.707-.293l-7.5-7.5A.99989.99989,0,0,1,3.707,2.293l7.5,7.5A1,1,0,0,1,10.5,11.5Z"
        ></path>
        <path
          className="uim-primary"
          d="M10.5 11.5h-4a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0v4A.99943.99943 0 0 1 10.5 11.5zM13.5 18.5a.99943.99943 0 0 1-1-1v-4a.99943.99943 0 0 1 1-1h4a1 1 0 0 1 0 2h-3v3A.99943.99943 0 0 1 13.5 18.5z"
        ></path>
        <path
          className="uim-primary"
          d="M21,22a.99676.99676,0,0,1-.707-.293l-7.5-7.5A.99989.99989,0,0,1,14.207,12.793l7.5,7.5A1,1,0,0,1,21,22Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
