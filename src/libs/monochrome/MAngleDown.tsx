import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MAngleDown: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M12,15.12109a.99672.99672,0,0,1-.707-.293L7.05029,10.58594A.99989.99989,0,0,1,8.46436,9.17188L12,12.707l3.53564-3.53515a.99989.99989,0,0,1,1.41407,1.41406L12.707,14.82812A.99672.99672,0,0,1,12,15.12109Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
