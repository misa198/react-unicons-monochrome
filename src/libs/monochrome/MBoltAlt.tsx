import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MBoltAlt: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M11,22a.99951.99951,0,0,1-1-1V15H5a.99962.99962,0,0,1-.80859-1.58789l8-11A.99974.99974,0,0,1,14,3V9h5a.99962.99962,0,0,1,.80859,1.58789l-8,11A.99928.99928,0,0,1,11,22Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
