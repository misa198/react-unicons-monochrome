import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCloudShowersHeavy: React.FC<Props> = ({
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
          d="M7.4541 16a1.00045 1.00045 0 0 1-.93945-1.3418l1.0918-3a.9997.9997 0 0 1 1.8789.6836l-1.0918 3A.99965.99965 0 0 1 7.4541 16zM11.4541 16a1.00045 1.00045 0 0 1-.93945-1.3418l1.0918-3a.9997.9997 0 0 1 1.8789.6836l-1.0918 3A.99965.99965 0 0 1 11.4541 16zM15.4541 16a1.00045 1.00045 0 0 1-.93945-1.3418l1.0918-3a.9997.9997 0 1 1 1.8789.6836l-1.0918 3A.99965.99965 0 0 1 15.4541 16zM7.81836 22a1.00045 1.00045 0 0 1-.93945-1.3418l.72754-2a.9997.9997 0 0 1 1.8789.6836l-.72754 2A.99965.99965 0 0 1 7.81836 22zM11.81836 22a1.00045 1.00045 0 0 1-.93945-1.3418l.72754-2a.9997.9997 0 0 1 1.8789.6836l-.72754 2A.99965.99965 0 0 1 11.81836 22zM15.81836 22a1.00045 1.00045 0 0 1-.93945-1.3418l.72754-2a.9997.9997 0 1 1 1.8789.6836l-.72754 2A.99965.99965 0 0 1 15.81836 22z"
        ></path>
      </svg>
    </Wrapper>
  );
};
