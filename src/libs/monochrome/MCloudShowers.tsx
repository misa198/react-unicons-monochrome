import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCloudShowers: React.FC<Props> = ({
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
          d="M8 22a.99974.99974 0 0 1-1-1V18a1 1 0 0 1 2 0v3A.99974.99974 0 0 1 8 22zM12 22a.99974.99974 0 0 1-1-1V18a1 1 0 0 1 2 0v3A.99974.99974 0 0 1 12 22zM16 22a.99974.99974 0 0 1-1-1V18a1 1 0 0 1 2 0v3A.99974.99974 0 0 1 16 22zM8 16a.99974.99974 0 0 1-1-1V12a1 1 0 0 1 2 0v3A.99974.99974 0 0 1 8 16zM12 16a.99974.99974 0 0 1-1-1V12a1 1 0 0 1 2 0v3A.99974.99974 0 0 1 12 16zM16 16a.99974.99974 0 0 1-1-1V12a1 1 0 0 1 2 0v3A.99974.99974 0 0 1 16 16z"
        ></path>
      </svg>
    </Wrapper>
  );
};
