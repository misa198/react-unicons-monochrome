import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MFolderCheck: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M19,21.5H5a3.00328,3.00328,0,0,1-3-3V5.5a3.00328,3.00328,0,0,1,3-3H9.55859a2.99737,2.99737,0,0,1,2.8462,2.05078L12.7207,5.5H19a3.00328,3.00328,0,0,1,3,3v10A3.00328,3.00328,0,0,1,19,21.5Z"
        ></path>
        <path
          className="uim-primary"
          d="M11,16.5a.99676.99676,0,0,1-.707-.293l-2-2A.99989.99989,0,0,1,9.707,12.793L11,14.08594l3.293-3.293A.99989.99989,0,0,1,15.707,12.207l-4,4A.99676.99676,0,0,1,11,16.5Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
