import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MShovel: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        width="1em"
      >
        <path
          className="uim-tertiary"
          d="M8.4541,22H5a3.00328,3.00328,0,0,1-3-3V15.5459a2.98154,2.98154,0,0,1,.87891-2.1211L6.31348,9.98926a3.00719,3.00719,0,0,1,4.24316-.001v.001l3.4541,3.4541a3.00628,3.00628,0,0,1,.001,4.24316L10.5752,21.12109A2.98154,2.98154,0,0,1,8.4541,22Z"
        ></path>
        <path
          className="uim-primary"
          d="M9.97754,15.02246a1,1,0,0,1-.707-1.707L17.751,4.835A.99989.99989,0,1,1,19.165,6.249l-8.48047,8.48047A.99676.99676,0,0,1,9.97754,15.02246Z"
        ></path>
        <path
          className="uim-primary"
          d="M21,9.084a.99675.99675,0,0,1-.707-.293L15.209,3.707A.99989.99989,0,0,1,16.62305,2.293l5.084,5.084A1,1,0,0,1,21,9.084Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
