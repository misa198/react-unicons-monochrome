import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MFileMedicalAlt: React.FC<Props> = ({
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
          d="M14,9a2,2,0,0,1-2-2V2H6A2.996,2.996,0,0,0,3,5V19a2.996,2.996,0,0,0,3,3H16a2.996,2.996,0,0,0,3-3V9Z"
        ></path>
        <path
          className="uim-primary"
          d="M15.5,18l-.0332-.00049a1.00323,1.00323,0,0,1-.71973-.34082l-2.7959-3.1958L10.707,15.707A.99928.99928,0,0,1,10,16H8a1,1,0,0,1,0-2H9.58594l1.707-1.707a.96759.96759,0,0,1,.74023-.29248,1.00323,1.00323,0,0,1,.71973.34082l2.7959,3.1958L16.793,14.293A.99928.99928,0,0,1,17.5,14H20a1,1,0,0,1,0,2H17.91406l-1.707,1.707A.99891.99891,0,0,1,15.5,18Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
