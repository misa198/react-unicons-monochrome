import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCamera: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M19,20.5H5a3.00328,3.00328,0,0,1-3-3v-8a3.00328,3.00328,0,0,1,3-3H6.2793l.31591-.94922A2.99737,2.99737,0,0,1,9.44141,3.5h5.11718a2.99737,2.99737,0,0,1,2.8462,2.05078L17.7207,6.5H19a3.00328,3.00328,0,0,1,3,3v8A3.00328,3.00328,0,0,1,19,20.5Z"
        ></path>
        <path
          className="uim-primary"
          d="M12,16.5a4,4,0,1,1,4-4A4.00427,4.00427,0,0,1,12,16.5Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
