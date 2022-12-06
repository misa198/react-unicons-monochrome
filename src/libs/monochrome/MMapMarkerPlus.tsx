import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MMapMarkerPlus: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M12,21.99805a.99676.99676,0,0,1-.707-.293L6.02051,16.43262a8.45593,8.45593,0,1,1,11.959,0L12.707,21.70508A.99676.99676,0,0,1,12,21.99805Z"
        ></path>
        <path
          className="uim-primary"
          d="M14,9.45312H13v-1a1,1,0,1,0-2,0v1H10a1,1,0,0,0,0,2h1v1a1,1,0,0,0,2,0v-1h1a1,1,0,0,0,0-2Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
