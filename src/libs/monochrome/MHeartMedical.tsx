import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MHeartMedical: React.FC<Props> = ({
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
          className="uim-tertiary"
          d="M12,20.812a2.99259,2.99259,0,0,1-2.12109-.87646l-6.042-6.042A6.273,6.273,0,0,1,12,4.4126a6.273,6.273,0,0,1,8.16309,9.481l-6.042,6.04151A2.9927,2.9927,0,0,1,12,20.812Z"
        ></path>
        <path
          className="uim-primary"
          d="M14,13H10a1,1,0,0,1,0-2h4a1,1,0,0,1,0,2Z"
        ></path>
        <path
          className="uim-primary"
          d="M12,15a.99974.99974,0,0,1-1-1V10a1,1,0,0,1,2,0v4A.99974.99974,0,0,1,12,15Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
