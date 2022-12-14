import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MPower: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M7.40332,7.47949a.99962.99962,0,0,1,0,1.41406,6.50414,6.50414,0,1,0,9.19336,0,.99337.99337,0,0,1,1.34845-1.45764,8.47286,8.47286,0,0,0-11.89026,0A.9917.9917,0,0,1,7.40332,7.47949Z"
        ></path>
        <path
          className="uim-primary"
          d="M14.5,6.5a.99676.99676,0,0,1-.707-.293L12,4.41406,10.207,6.207A.99989.99989,0,0,1,8.793,4.793l2.5-2.5a.99962.99962,0,0,1,1.41406,0l2.5,2.5A1,1,0,0,1,14.5,6.5Z"
        ></path>
        <path
          className="uim-primary"
          d="M12,11a.99943.99943,0,0,1-1-1V3a1,1,0,0,1,2,0v7A.99943.99943,0,0,1,12,11Z"
        ></path>
        <path
          className="uim-primary"
          d="M12,21.99609A8.501,8.501,0,0,1,5.98926,7.47949.99989.99989,0,0,1,7.40332,8.89355a6.50414,6.50414,0,1,0,9.19336,0,.99989.99989,0,0,1,1.41406-1.41406A8.501,8.501,0,0,1,12,21.99609Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
