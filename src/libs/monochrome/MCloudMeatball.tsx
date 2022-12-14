import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCloudMeatball: React.FC<Props> = ({
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
          d="M17,17.9H6c-2.2,0-4-1.8-4-4C2,12,3.3,10.4,5.1,10c0.5-3.8,4-6.5,7.9-6c2.4,0.3,4.5,1.9,5.5,4.2c2.6,0.8,4.2,3.5,3.4,6.2C21.2,16.4,19.2,17.9,17,17.9z"
          enableBackground="new"
        ></path>
        <path
          className="uim-primary"
          d="M14.5,17.9h-5c-0.6,0-1-0.4-1-1s0.4-1,1-1h5c0.6,0,1,0.4,1,1S15.1,17.9,14.5,17.9z"
        ></path>
        <path
          className="uim-primary"
          d="M13.3,20.1c-0.4,0-0.7-0.2-0.9-0.5l-2.5-4.3c-0.3-0.5-0.1-1.1,0.4-1.4c0.5-0.3,1.1-0.1,1.4,0.4c0,0,0,0,0,0l2.5,4.3c0.3,0.5,0.1,1.1-0.4,1.4C13.6,20,13.4,20.1,13.3,20.1z"
        ></path>
        <path
          className="uim-primary"
          d="M10.7,20.1c-0.6,0-1-0.4-1-1c0-0.2,0-0.3,0.1-0.5l2.5-4.3c0.3-0.5,0.9-0.6,1.4-0.4c0.5,0.3,0.6,0.9,0.4,1.4l-2.5,4.3C11.4,19.9,11.1,20.1,10.7,20.1z"
        ></path>
      </svg>
    </Wrapper>
  );
};
