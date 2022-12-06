import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCloudInfo: React.FC<Props> = ({
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
          d="M18.42926,8.23242A6.99612,6.99612,0,0,0,5.06079,10.12256,3.994,3.994,0,0,0,6,18H17a4.98638,4.98638,0,0,0,1.42926-9.76758Z"
        ></path>
        <path
          className="uim-primary"
          d="M12,20a.99974.99974,0,0,1-1-1V16a1,1,0,0,1,2,0v3A.99974.99974,0,0,1,12,20Z"
        ></path>
        <circle cx="12" cy="13" r="1" className="uim-primary"></circle>
      </svg>
    </Wrapper>
  );
};
