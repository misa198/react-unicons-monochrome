import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCompressPoint: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M13.41417,18.41417a.99974.99974,0,0,1-1-1v-4a.99973.99973,0,0,1,1-1h4a1,1,0,0,1,0,2h-3v3A.99974.99974,0,0,1,13.41417,18.41417Z"
        ></path>
        <path
          className="uim-tertiary"
          d="M5.63623,19.36426a1,1,0,0,1-.707-1.707L17.65674,4.92871A.99989.99989,0,0,1,19.0708,6.34277L6.34326,19.07129A.99676.99676,0,0,1,5.63623,19.36426Z"
        ></path>
        <path
          className="uim-primary"
          d="M10.58583 11.58583h-4a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0v4A.99973.99973 0 0 1 10.58583 11.58583zM21.707 20.293L14.12109 12.707a.99989.99989 0 0 0-1.41406 0h0a.99989.99989 0 0 0 0 1.41406L20.293 21.707A.99989.99989 0 0 0 21.707 20.293z"
        ></path>
        <path
          className="uim-primary"
          d="M11.293,11.293a.99989.99989,0,0,0,0-1.41406L3.707,2.293A.99989.99989,0,0,0,2.293,3.707L9.87891,11.293a.99989.99989,0,0,0,1.41406,0Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
