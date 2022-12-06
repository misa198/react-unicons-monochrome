import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MWheelchair: React.FC<Props> = ({
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
          className="uim-primary"
          d="M9.5,22.5c-3.3,0-6-2.7-6-6c0-2.4,1.4-4.5,3.6-5.5c0.5-0.2,1.1,0,1.3,0.5s0,1.1-0.5,1.3l0,0c-2,0.9-2.9,3.2-2.1,5.3c0.6,1.5,2.1,2.4,3.7,2.4c1.3,0,2.4-0.6,3.2-1.6c0.3-0.4,1-0.5,1.4-0.2c0.4,0.3,0.5,1,0.2,1.4c0,0,0,0,0,0C13.2,21.6,11.4,22.5,9.5,22.5z"
        ></path>
        <path
          className="uim-tertiary"
          d="M19.5,20.5h-1v-5c0,0,0,0,0,0c0-0.6-0.4-1-1-1h-5v-2h5c0.6,0,1-0.4,1-1s-0.4-1-1-1h-5v-2c0-0.6-0.4-1-1-1s-1,0.4-1,1v7c0,0,0,0,0,0c0,0.1,0,0.2,0.1,0.3c0,0,0,0.1,0,0.1c0.1,0.2,0.3,0.4,0.5,0.5c0,0,0,0,0,0c0.1,0.1,0.3,0.1,0.4,0.1c0,0,0,0,0,0h5v5c0,0,0,0,0,0c0,0.1,0,0.2,0.1,0.3c0,0,0,0.1,0,0.1c0.1,0.2,0.3,0.4,0.5,0.5c0,0,0,0,0,0c0.1,0.1,0.3,0.1,0.4,0.1h0h2c0.6,0,1-0.4,1-1S20.1,20.5,19.5,20.5z"
        ></path>
        <circle cx="12" cy="4.5" r="2" className="uim-tertiary"></circle>
      </svg>
    </Wrapper>
  );
};