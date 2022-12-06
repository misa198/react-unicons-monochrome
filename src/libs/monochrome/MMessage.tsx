import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MMessage: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M20.34,9.32007l-13.99-7A3.00087,3.00087,0,0,0,2.27,6.22L4.41,11l.26.59a1.05944,1.05944,0,0,1,0,.81994L4.41,13,2.27,17.78a2.95353,2.95353,0,0,0,.67,3.37988A2.96553,2.96553,0,0,0,5,22a3.14129,3.14129,0,0,0,1.35-.32007l13.99-7a2.99328,2.99328,0,0,0,0-5.35986Z"
        ></path>
        <path
          className="uim-primary"
          d="M14.46,12a.9965.9965,0,0,1-1,1H4.41l.26-.59009a1.05944,1.05944,0,0,0,0-.81994L4.41,11h9.05A.9965.9965,0,0,1,14.46,12Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
