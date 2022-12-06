import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MFlask: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        viewBox="0 0 24 24"
        width="1em"
      >
        <path
          className="uim-tertiary"
          d="M5.61523,19.49805C5.79064,19.81147,6.12327,20.00401,6.48242,20h11.03516c0.55251-0.00011,1.00031-0.44809,1.00021-1.00059c-0.00003-0.17684-0.04694-0.35051-0.13595-0.50332L14.592,12H9.40826l-3.78912,6.49609C5.43451,18.80418,5.43301,19.18853,5.61523,19.49805z"
        ></path>
        <path
          className="uim-quaternary"
          d="M20.10938,17.48828L15,8.72949V4h1c0.55231,0,1-0.44769,1-1s-0.44769-1-1-1h-2h-4C9.99982,2,9.99963,2,9.99945,2H8C7.44769,2,7,2.44769,7,3s0.44769,1,1,1h1v4.72949l-5.1084,8.75879c-0.26776,0.45886-0.40887,0.98065-0.40894,1.5119C3.48267,20.65692,4.82568,22,6.48242,22h11.03516c0.53076-0.00012,1.05206-0.14099,1.51062-0.40826C20.4599,20.75714,20.94397,18.91998,20.10938,17.48828z M17.51758,20H6.48242c-0.35913,0.00403-0.69177-0.18854-0.86719-0.50195c-0.18225-0.30951-0.18073-0.69385,0.00391-1.00195L9.40826,12h5.18372l3.78986,6.49609c0.08899,0.15283,0.13593,0.32648,0.13593,0.5033C18.51788,19.55194,18.07007,19.99988,17.51758,20z"
        ></path>
        <circle cx="14" cy="17" r="1" className="uim-primary"></circle>
        <circle cx="10" cy="16" r="1" className="uim-primary"></circle>
      </svg>
    </Wrapper>
  );
};
