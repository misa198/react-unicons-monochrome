import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MMars: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
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
          d="M14.74023,10.25977a1,1,0,0,1-.707-1.707L18.793,3.793A.99989.99989,0,0,1,20.207,5.207L15.44727,9.9668A.9968.9968,0,0,1,14.74023,10.25977Z"
        ></path>
        <path
          className="uim-primary"
          d="M19.5,5.5h-4a1,1,0,0,1,0-2h4a1,1,0,0,1,0,2Z"
        ></path>
        <path
          className="uim-primary"
          d="M19.5 9.5a.99974.99974 0 0 1-1-1v-4a1 1 0 0 1 2 0v4A.99974.99974 0 0 1 19.5 9.5zM10.5 20.5a7.001 7.001 0 1 1 4.94922-2.05029h0A6.95376 6.95376 0 0 1 10.5 20.5zm0-12a5 5 0 1 0 3.53516 8.53564h0A5 5 0 0 0 10.5 8.5z"
        ></path>
      </svg>
    </Wrapper>
  );
};
