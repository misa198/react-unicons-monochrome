import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MHospitalSymbol: React.FC<Props> = ({
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
        <path
          className="uim-primary"
          d="M15,7a.99974.99974,0,0,0-1,1v3H10V8A1,1,0,0,0,8,8v8a1,1,0,0,0,2,0V13h4v3a1,1,0,0,0,2,0V8A.99974.99974,0,0,0,15,7Z"
        ></path>
        <path
          className="uim-tertiary"
          d="M12,2A10,10,0,1,0,22,12,10.01146,10.01146,0,0,0,12,2Zm4,14a1,1,0,0,1-2,0V13H10v3a1,1,0,0,1-2,0V8a1,1,0,0,1,2,0v3h4V8a1,1,0,0,1,2,0Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
