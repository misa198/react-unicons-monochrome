import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCloudHail: React.FC<Props> = ({
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
        <circle cx="8" cy="12" r="1" className="uim-primary"></circle>
        <circle cx="8" cy="16" r="1" className="uim-primary"></circle>
        <circle cx="8" cy="20" r="1" className="uim-primary"></circle>
        <circle cx="12" cy="10" r="1" className="uim-primary"></circle>
        <circle cx="12" cy="14" r="1" className="uim-primary"></circle>
        <circle cx="12" cy="18" r="1" className="uim-primary"></circle>
        <circle cx="16" cy="12" r="1" className="uim-primary"></circle>
        <circle cx="16" cy="16" r="1" className="uim-primary"></circle>
        <circle cx="16" cy="20" r="1" className="uim-primary"></circle>
      </svg>
    </Wrapper>
  );
};
