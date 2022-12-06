import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MSync: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
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
          d="M8.625,8.5h-4.5a.99943.99943,0,0,1-1-1V3a1,1,0,0,1,2,0V6.5h3.5a1,1,0,0,1,0,2Z"
        ></path>
        <path
          className="uim-primary"
          d="M8.625,8.5h-4.5a1,1,0,0,1,0-2h4.5a1,1,0,0,1,0,2Z"
        ></path>
        <path
          className="uim-primary"
          d="M21 13a.99943.99943 0 0 1-1-1A7.995 7.995 0 0 0 5.0791 8.001.99981.99981 0 0 1 3.34863 6.999 9.99473 9.99473 0 0 1 22 12 .99943.99943 0 0 1 21 13zM19.875 22a.99943.99943 0 0 1-1-1V17.5h-3.5a1 1 0 0 1 0-2h4.5a.99943.99943 0 0 1 1 1V21A.99943.99943 0 0 1 19.875 22z"
        ></path>
        <path
          className="uim-primary"
          d="M12,22A10.01177,10.01177,0,0,1,2,12a1,1,0,0,1,2,0,7.995,7.995,0,0,0,14.9209,3.999.99981.99981,0,0,1,1.73047,1.002A10.03228,10.03228,0,0,1,12,22Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
