import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MFolderDownload: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M19,21.5H5a3.00328,3.00328,0,0,1-3-3V5.5a3.00328,3.00328,0,0,1,3-3H9.55859A2.99629,2.99629,0,0,1,12.4043,4.55078L12.7207,5.5H19a3.00328,3.00328,0,0,1,3,3v10A3.00328,3.00328,0,0,1,19,21.5Z"
        ></path>
        <path
          className="uim-primary"
          d="M12,17.5a.99943.99943,0,0,1-1-1v-5a1,1,0,0,1,2,0v5A.99943.99943,0,0,1,12,17.5Z"
        ></path>
        <path
          className="uim-primary"
          d="M12,17.5a.99676.99676,0,0,1-.707-.293l-2-2A.99989.99989,0,0,1,10.707,13.793L12,15.08594l1.293-1.293A.99989.99989,0,0,1,14.707,15.207l-2,2A.99676.99676,0,0,1,12,17.5Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
