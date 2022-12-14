import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCloudShowersAlt: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M17,16H6a4.00036,4.00036,0,0,1-.94385-7.8877A6.99757,6.99757,0,0,1,18.418,6.21484,4.99453,4.99453,0,0,1,17,16Z"
        ></path>
        <path
          className="uim-primary"
          d="M8 20a.99943.99943 0 0 1-1-1V14a1 1 0 0 1 2 0v5A.99943.99943 0 0 1 8 20zM12 22a.99943.99943 0 0 1-1-1V12a1 1 0 0 1 2 0v9A.99943.99943 0 0 1 12 22zM16 20a.99943.99943 0 0 1-1-1V14a1 1 0 0 1 2 0v5A.99943.99943 0 0 1 16 20z"
        ></path>
      </svg>
    </Wrapper>
  );
};
