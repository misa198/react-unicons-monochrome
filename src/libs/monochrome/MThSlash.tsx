import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MThSlash: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        viewBox="0 0 24 24"
        width="1em"
      >
        <rect
          width="4"
          height="4"
          x="4"
          y="4"
          className="uim-quaternary"
        ></rect>
        <rect
          width="4"
          height="4"
          x="10"
          y="4"
          className="uim-quaternary"
        ></rect>
        <rect
          width="4"
          height="4"
          x="16"
          y="4"
          className="uim-quaternary"
        ></rect>
        <rect
          width="4"
          height="4"
          x="10"
          y="10"
          className="uim-quaternary"
        ></rect>
        <rect
          width="4"
          height="4"
          x="16"
          y="10"
          className="uim-quaternary"
        ></rect>
        <rect
          width="4"
          height="4"
          x="10"
          y="16"
          className="uim-quaternary"
        ></rect>
        <rect
          width="4"
          height="4"
          x="16"
          y="16"
          className="uim-quaternary"
        ></rect>
        <path
          className="uim-tertiary"
          d="M21,2H3C2.44786,1.99986,2.00014,2.44734,2,2.99948C2,2.99965,2,2.99983,2,3v18c-0.00014,0.55214,0.44734,0.99986,0.99948,1C2.99965,22,2.99983,22,3,22h18c0.55214,0.00014,0.99986-0.44734,1-0.99948c0-0.00017,0-0.00035,0-0.00052V3c0.00014-0.55214-0.44734-0.99986-0.99948-1C21.00035,2,21.00017,2,21,2z M10,14v-4h4v4H10z M14,16v4h-4v-4H14z M4,10h4v4H4V10z M10,8V4h4v4H10z M16,10h4v4h-4V10z M20,8h-4V4h4V8z M8,4v4H4V4H8z M4,16h4v4H4V16z M16,20v-4h4v4H16z"
        ></path>
        <path
          className="uim-primary"
          d="M22,23c-0.26527,0.0003-0.51971-0.10515-0.707-0.293l-20-20C0.90605,2.31302,0.91175,1.67995,1.30573,1.293c0.38897-0.38203,1.0123-0.38203,1.40127,0l20,20c0.39046,0.39058,0.39037,1.02375-0.00021,1.41421C22.51931,22.89463,22.26509,22.99994,22,23z"
        ></path>
        <rect
          width="4"
          height="4"
          x="4"
          y="16"
          className="uim-quaternary"
        ></rect>
        <rect
          width="4"
          height="4"
          x="4"
          y="10"
          className="uim-quaternary"
        ></rect>
      </svg>
    </Wrapper>
  );
};
