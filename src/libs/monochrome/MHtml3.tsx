import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MHtml3: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        viewBox="0 0 24 24"
        width="1em"
      >
        <polygon
          className="uim-tertiary"
          points="17.476 6.123 16.942 12.117 16.944 12.15 16.942 12.224 16.942 12.223 16.562 16.415 16.521 16.787 12 18.037 12 18.038 11.996 18.041 7.484 16.783 7.178 13.318 9.391 13.318 9.548 15.08 12.001 15.745 12 15.746 14.461 15.071 14.722 12.202 9.576 12.202 9.532 11.717 9.431 10.581 9.379 9.97 14.917 9.97 15.119 7.739 6.682 7.739 6.638 7.254 6.538 6.117 6.485 5.507 17.529 5.507"
        ></polygon>
        <path
          className="uim-primary"
          d="M3.19501,2L4.797,19.99402L11.98901,22l7.21198-2.013L20.80499,2H3.19501z M17.47601,6.12299l-0.534,5.99402l0.00201,0.03302L16.94202,12.224v-0.00098l-0.38,4.19196L16.521,16.78699l-4.521,1.25v0.00104l-0.00403,0.00299l-4.51196-1.258l-0.30603-3.46503h2.21301l0.15698,1.76202l2.453,0.66498L12,15.74597l2.461-0.67499l0.26099-2.86896h-5.146l-0.04401-0.48505l-0.10095-1.13599l-0.052-0.61102h5.53796l0.20203-2.23096H6.68201L6.638,7.25403L6.53802,6.117L6.48499,5.50702h11.04401L17.47601,6.12299z"
        ></path>
      </svg>
    </Wrapper>
  );
};
