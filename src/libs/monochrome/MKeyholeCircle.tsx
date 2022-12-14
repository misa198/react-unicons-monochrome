import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MKeyholeCircle: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M14,10a2,2,0,1,0-3,1.7226V15a1,1,0,0,0,2,0V11.7226A1.99146,1.99146,0,0,0,14,10Z"
        ></path>
        <path
          className="uim-tertiary"
          d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm1,9.7226V15a1,1,0,0,1-2,0V11.7226a2,2,0,1,1,2,0Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
