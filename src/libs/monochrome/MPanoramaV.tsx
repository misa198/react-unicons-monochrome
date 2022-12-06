import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MPanoramaV: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M18,22H6a.99957.99957,0,0,1-.90967-1.415A21.23908,21.23908,0,0,0,6.72559,12,21.23908,21.23908,0,0,0,5.09033,3.415.99957.99957,0,0,1,6,2H18a.99957.99957,0,0,1,.90967,1.415A21.23908,21.23908,0,0,0,17.27441,12a21.23908,21.23908,0,0,0,1.63526,8.585A.99957.99957,0,0,1,18,22Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
