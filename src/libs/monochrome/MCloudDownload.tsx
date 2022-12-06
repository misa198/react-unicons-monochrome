import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCloudDownload: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M17,16H6a4.00036,4.00036,0,0,1-.94385-7.8877A6.99757,6.99757,0,0,1,18.418,6.21484,4.99453,4.99453,0,0,1,17,16Z"
        ></path>
        <path
          className="uim-primary"
          d="M12,22a.99676.99676,0,0,1-.707-.293l-2.5-2.5A.99989.99989,0,0,1,10.207,17.793L12,19.58594l1.793-1.793A.99989.99989,0,0,1,15.207,19.207l-2.5,2.5A.99676.99676,0,0,1,12,22Z"
        ></path>
        <path
          className="uim-primary"
          d="M12,22a.99974.99974,0,0,1-1-1V11a1,1,0,0,1,2,0V21A.99974.99974,0,0,1,12,22Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
