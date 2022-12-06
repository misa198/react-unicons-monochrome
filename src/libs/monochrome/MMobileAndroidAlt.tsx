import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MMobileAndroidAlt: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M16,22H8a3.00328,3.00328,0,0,1-3-3V5A3.00328,3.00328,0,0,1,8,2h8a3.00328,3.00328,0,0,1,3,3V19A3.00328,3.00328,0,0,1,16,22Z"
        ></path>
        <path
          className="uim-primary"
          d="M16,22H8a3,3,0,0,1-3-3V16H19v3A3,3,0,0,1,16,22Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
