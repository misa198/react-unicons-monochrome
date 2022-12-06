import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MArrowsMaximize: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M21 22H15a1 1 0 0 1 0-2h5V15a1 1 0 0 1 2 0v6A.99974.99974 0 0 1 21 22zM3 10A.99974.99974 0 0 1 2 9V3A.99974.99974 0 0 1 3 2H9A1 1 0 0 1 9 4H4V9A.99974.99974 0 0 1 3 10z"
        ></path>
        <path
          className="uim-primary"
          d="M21,22a.99676.99676,0,0,1-.707-.293l-18-18A.99989.99989,0,0,1,3.707,2.293l18,18A1,1,0,0,1,21,22Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
