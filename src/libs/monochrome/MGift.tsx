import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MGift: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        viewBox="0 0 24 24"
        width="1em"
      >
        <path
          className="uim-quaternary"
          d="M21,13.0003H5c-0.55197,0.00031-0.99969-0.44689-1-0.99886c0-0.00038,0-0.00076,0-0.00114v-1c0.00181-1.65611,1.34389-2.99819,3-3h12c1.65611,0.00181,2.99819,1.34389,3,3v1c0.00031,0.55197-0.44689,0.99969-0.99886,1C21.00076,13.0003,21.00038,13.0003,21,13.0003z"
        ></path>
        <path
          className="uim-tertiary"
          d="M6,13.00031v6c0.00183,1.65613,1.34387,2.99817,3,3h8c1.65613-0.00183,2.99817-1.34387,3-3v-6H6z"
        ></path>
        <path
          className="uim-primary"
          d="M15.5,2.0003c-0.94212,0.0004-1.84396,0.38218-2.5,1.05835C11.65026,1.67668,9.43577,1.65056,8.05381,3.0003S6.64572,6.56453,7.99546,7.94649C8.65417,8.62093,9.55725,9.00091,10.5,9.0003H12v13h2v-13h1.5c1.933,0,3.5-1.567,3.5-3.5S17.433,2.0003,15.5,2.0003z M9,5.5003c0-0.82843,0.67157-1.5,1.5-1.5s1.5,0.67157,1.5,1.5v1.5h-1.5C9.67195,6.9994,9.0009,6.32835,9,5.5003z M15.5,7.0003H14v-1.5c0-0.82843,0.67157-1.5,1.5-1.5c0.82843,0,1.5,0.67157,1.5,1.5S16.32843,7.0003,15.5,7.0003z"
        ></path>
      </svg>
    </Wrapper>
  );
};
