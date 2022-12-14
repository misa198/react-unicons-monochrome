import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCloudTimes: React.FC<Props> = ({
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
          d="M10,20a1,1,0,0,1-.707-1.707l4-4A.99989.99989,0,0,1,14.707,15.707l-4,4A.99676.99676,0,0,1,10,20Z"
        ></path>
        <path
          className="uim-primary"
          d="M14,20a.99676.99676,0,0,1-.707-.293l-4-4A.99989.99989,0,0,1,10.707,14.293l4,4A1,1,0,0,1,14,20Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
