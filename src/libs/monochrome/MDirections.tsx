import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MDirections: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M12,22.001a2.98066,2.98066,0,0,1-2.12109-.87891l-7.001-7.001a3.00465,3.00465,0,0,1-.00049-4.24218l7.00147-7.001a3.07312,3.07312,0,0,1,4.24267,0l7.00049,7.001a3.00465,3.00465,0,0,1,.00049,4.24218l-7.00147,7.001A2.98066,2.98066,0,0,1,12,22.001Z"
        ></path>
        <path
          className="uim-primary"
          d="M16.207,11.293l-2-2A.99989.99989,0,0,0,12.793,10.707l.293.293H9.5a.99974.99974,0,0,0-1,1v2a1,1,0,0,0,2,0V13h2.58594l-.293.293A.99989.99989,0,1,0,14.207,14.707l2-2A.99962.99962,0,0,0,16.207,11.293Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
