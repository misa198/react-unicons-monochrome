import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MBrushAlt: React.FC<Props> = ({
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
          d="M18,1H6c0,0,0,0,0,0C5.4,1,5,1.4,5,2v9c0,1.7,1.3,3,3,3h2v2.8c-1.2,1.1-1.3,3-0.2,4.2c1.1,1.2,3,1.3,4.2,0.2s1.3-3,0.2-4.2c-0.1-0.1-0.2-0.2-0.2-0.2V14h2c1.7,0,3-1.3,3-3V2c0,0,0,0,0,0C19,1.4,18.6,1,18,1z M12,20c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S12.6,20,12,20z"
        ></path>
        <path
          className="uim-primary"
          d="M16,14H8c-1.7,0-3-1.3-3-3V9h14v2C19,12.7,17.7,14,16,14z"
        ></path>
      </svg>
    </Wrapper>
  );
};
