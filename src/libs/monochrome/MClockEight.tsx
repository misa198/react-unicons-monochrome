import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MClockEight: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M12,6a.99974.99974,0,0,0-1,1v4.42249l-2.09766,1.2113a1.00016,1.00016,0,0,0,1,1.73242l2.59766-1.5A1.00455,1.00455,0,0,0,13,12V7A.99974.99974,0,0,0,12,6Z"
        ></path>
        <path
          className="uim-tertiary"
          d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm1,10a1.00455,1.00455,0,0,1-.5.86621l-2.59766,1.5a1.00016,1.00016,0,0,1-1-1.73242L11,11.42249V7a1,1,0,0,1,2,0Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
