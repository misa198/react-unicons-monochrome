import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MClapperBoard: React.FC<Props> = ({
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
        <polygon
          className="uim-quaternary"
          points="9.92 2 2 9.92 2 7.08 7.08 2"
        ></polygon>
        <polygon
          className="uim-quaternary"
          points="16.92 2 8.92 10 6.08 10 14.08 2"
        ></polygon>
        <path
          className="uim-quaternary"
          d="M21.85,4.07007L15.92,10h-2.84l7.52-7.52C21.19303,2.84391,21.63638,3.40789,21.85,4.07007z"
        ></path>
        <path
          className="uim-primary"
          d="M5,2C3.34534,1.9978,2.0022,3.33734,2,4.992C2,4.99469,2,4.99731,2,5v2.08002L7.08002,2H5z"
        ></path>
        <polygon
          className="uim-primary"
          points="9.92 2 2 9.92 2 10 6.08 10 14.08 2"
        ></polygon>
        <path
          className="uim-primary"
          d="M21.84998 4.07007L15.91998 10H22V5C22.00226 4.68384 21.9516 4.36951 21.84998 4.07007zM20.51001 2.40991C20.05237 2.14069 19.53094 1.99915 19 2h-2.08002l-8 8h4.16003l7.51996-7.52002C20.57251 2.45361 20.54236 2.43011 20.51001 2.40991z"
        ></path>
        <path
          className="uim-tertiary"
          d="M2,10v9c0.00183,1.65613,1.34387,2.99817,3,3h14c1.65613-0.00183,2.99817-1.34387,3-3v-9H2z"
        ></path>
      </svg>
    </Wrapper>
  );
};
