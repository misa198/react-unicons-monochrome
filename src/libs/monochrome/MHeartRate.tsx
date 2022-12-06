import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MHeartRate: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M6.8999 13H3a1 1 0 0 1 0-2H6.8999a1 1 0 0 1 0 2zM21 13H17.08984a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2z"
        ></path>
        <path
          className="uim-primary"
          d="M14.5498,20a.99926.99926,0,0,1-.93945-.65771L9.4502,7.92139l-1.61084,4.4209a.99987.99987,0,0,1-1.87891-.68458l2.55029-7A.99927.99927,0,0,1,9.4502,4h0a.99926.99926,0,0,1,.93945.65771l4.1582,11.41553,1.602-4.41455a1,1,0,0,1,1.87989.68262l-2.54,7A1.00083,1.00083,0,0,1,14.55029,20Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
