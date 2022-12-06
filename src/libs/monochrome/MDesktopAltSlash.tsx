import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MDesktopAltSlash: React.FC<Props> = ({
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
          className="uim-secondary"
          d="M18,17H6c-1.65685,0-3-1.34315-3-3v-2h18v2C21,15.65685,19.65685,17,18,17z M18,21H6c-0.55228,0-1-0.44772-1-1s0.44772-1,1-1h12c0.55228,0,1,0.44772,1,1S18.55228,21,18,21z"
        ></path>
        <rect width="6" height="2" x="9" y="17" className="uim-tertiary"></rect>
        <path
          className="uim-quaternary"
          d="M18,3H6C4.34387,3.00183,3.00183,4.34387,3,6v6h18V6C20.99817,4.34387,19.65613,3.00183,18,3z"
        ></path>
        <path
          className="uim-primary"
          d="M21,22c-0.26527,0.0003-0.51971-0.10515-0.707-0.293l-18-18C1.90605,3.31302,1.91175,2.67995,2.30573,2.293c0.38897-0.38203,1.0123-0.38203,1.40127,0l18,18c0.39046,0.39058,0.39037,1.02375-0.00021,1.41421C21.51931,21.89463,21.26509,21.99994,21,22z"
        ></path>
      </svg>
    </Wrapper>
  );
};
