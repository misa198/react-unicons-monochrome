import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MScrew: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        width="1em"
      >
        <path
          className="uim-tertiary"
          d="M6.13037,22H3a.99974.99974,0,0,1-1-1V17.86914a.99928.99928,0,0,1,.293-.707l9.39111-9.39063a.99964.99964,0,0,1,1.41406,0L16.229,10.90137a.99963.99963,0,0,1,0,1.41406L6.8374,21.707A1.00012,1.00012,0,0,1,6.13037,22Z"
        ></path>
        <path
          className="uim-primary"
          d="M15.522,12.6084a.99789.99789,0,0,1-.707-.293L11.68408,9.18555a.99882.99882,0,0,1-.28271-.84864l.78271-5.47851A1,1,0,0,1,13.88086,2.293L21.707,10.11914a1.0001,1.0001,0,0,1-.56543,1.69727l-5.478.78222A.99015.99015,0,0,1,15.522,12.6084Z"
        ></path>
        <line
          x1="8.632"
          x2="14.586"
          y1="10.673"
          y2="14.11"
          className="uim-primary"
        ></line>
        <path
          className="uim-primary"
          d="M14.58447,15.11035a.99707.99707,0,0,1-.499-.13379l-5.95361-3.4375a1.00016,1.00016,0,1,1,1-1.73242l5.95361,3.4375a1,1,0,0,1-.501,1.86621Z"
        ></path>
        <line
          x1="6.022"
          x2="11.975"
          y1="13.283"
          y2="16.72"
          className="uim-primary"
        ></line>
        <path
          className="uim-primary"
          d="M11.97461,17.7207a.99707.99707,0,0,1-.499-.13379l-5.95411-3.4375a1.00016,1.00016,0,1,1,1-1.73242l5.95411,3.4375a1,1,0,0,1-.501,1.86621Z"
        ></path>
        <line
          x1="3.416"
          x2="9.37"
          y1="15.888"
          y2="19.326"
          className="uim-primary"
        ></line>
        <path
          className="uim-primary"
          d="M9.36865,20.32617a.99707.99707,0,0,1-.499-.13379L2.916,16.75488a1.00016,1.00016,0,1,1,1-1.73242L9.86963,18.46a1,1,0,0,1-.501,1.86621Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
