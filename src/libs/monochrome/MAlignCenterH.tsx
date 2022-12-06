import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MAlignCenterH: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M5.5,15.5a.99676.99676,0,0,1-.707-.293l-2.5-2.5a.99962.99962,0,0,1,0-1.41406l2.5-2.5A.99989.99989,0,0,1,6.207,10.207L4.41406,12l1.793,1.793A1,1,0,0,1,5.5,15.5Z"
        ></path>
        <path
          className="uim-primary"
          d="M8,13H3a1,1,0,0,1,0-2H8a1,1,0,0,1,0,2Z"
        ></path>
        <path
          className="uim-tertiary"
          d="M12,17a.99974.99974,0,0,1-1-1V8a1,1,0,0,1,2,0v8A.99974.99974,0,0,1,12,17Z"
        ></path>
        <path
          className="uim-primary"
          d="M18.5,15.5a1,1,0,0,1-.707-1.707L19.58594,12l-1.793-1.793A.99989.99989,0,0,1,19.207,8.793l2.5,2.5a.99962.99962,0,0,1,0,1.41406l-2.5,2.5A.99676.99676,0,0,1,18.5,15.5Z"
        ></path>
        <path
          className="uim-primary"
          d="M21,13H16a1,1,0,0,1,0-2h5a1,1,0,0,1,0,2Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
