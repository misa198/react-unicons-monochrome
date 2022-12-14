import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MFolderMedical: React.FC<Props> = ({
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
          d="M19,22H5a3,3,0,0,1-3-3V6A3,3,0,0,1,5,3H9.56A3,3,0,0,1,12.4,5.05l.32,1H19a3,3,0,0,1,3,3V19A3,3,0,0,1,19,22Z"
        ></path>
        <path
          className="uim-primary"
          d="M14,13H13V12a1,1,0,0,0-2,0v1H10a1,1,0,0,0,0,2h1v1a1,1,0,0,0,2,0V15h1a1,1,0,0,0,0-2Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
