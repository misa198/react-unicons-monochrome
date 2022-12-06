import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MFileExport: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        width="1em"
      >
        <path className="uim-primary" d="M19,9H14a2,2,0,0,1-2-2V2Z"></path>
        <path
          className="uim-tertiary"
          d="M14,9a2,2,0,0,1-2-2V2H6A3,3,0,0,0,3,5V19a3,3,0,0,0,3,3H16a3,3,0,0,0,3-3V9Z"
        ></path>
        <path
          className="uim-primary"
          d="M20.707,15.29346l-3-3A.99989.99989,0,1,0,16.293,13.70752l1.293,1.293H12a1,1,0,0,0,0,2h5.58594l-1.293,1.293A.99989.99989,0,1,0,17.707,19.70752l3-3A.99962.99962,0,0,0,20.707,15.29346Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
