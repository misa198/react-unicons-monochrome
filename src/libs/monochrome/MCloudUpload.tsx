import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCloudUpload: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M17,17H6a4.00036,4.00036,0,0,1-.94385-7.8877A6.99757,6.99757,0,0,1,18.418,7.21484,4.99453,4.99453,0,0,1,17,17Z"
        ></path>
        <path
          className="uim-primary"
          d="M14.5,13.5a.99676.99676,0,0,1-.707-.293L12,11.41406l-1.793,1.793A.99989.99989,0,0,1,8.793,11.793l2.5-2.5a.99962.99962,0,0,1,1.41406,0l2.5,2.5A1,1,0,0,1,14.5,13.5Z"
        ></path>
        <path
          className="uim-primary"
          d="M12,21a.99974.99974,0,0,1-1-1V10a1,1,0,0,1,2,0V20A.99974.99974,0,0,1,12,21Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
