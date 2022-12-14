import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MChartDown: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M21,11a.99943.99943,0,0,0-1,1v2.58594L13.707,8.293a.99962.99962,0,0,0-1.41406,0L9,11.58594,3.707,6.293A.99989.99989,0,0,0,2.293,7.707l6,6a.99963.99963,0,0,0,1.41406,0L13,10.41406,18.58594,16H16a1,1,0,0,0,0,2h5a.99943.99943,0,0,0,1-1V12A.99943.99943,0,0,0,21,11Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
