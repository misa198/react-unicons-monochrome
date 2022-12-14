import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MPlaneArrival: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M21,22H3a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z"
        ></path>
        <path
          className="uim-tertiary"
          d="M18.834,12.0767l-3.75838-1.368L13.94117,4.439a1,1,0,0,0-.642-.76166L11.9867,3.19967a1,1,0,0,0-1.34,1.003l.31778,5.00993L6.8781,7.72526a2,2,0,0,1-.90476-.66459L3.74855,4.15091a.5.5,0,0,0-.89595.26833L2.53781,8.85855A2,2,0,0,0,3.84874,10.8794l5.7476,2.092,4.11116,1.49627,6.409,2.33288a.9987.9987,0,0,0,1.34983-.88239A4.002,4.002,0,0,0,18.834,12.0767Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
