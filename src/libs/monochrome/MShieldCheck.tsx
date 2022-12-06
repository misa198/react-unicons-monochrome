import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MShieldCheck: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M12,22a.9986.9986,0,0,1-.581-.18652l-3.6504-2.60743A9.01643,9.01643,0,0,1,4,11.88281v-7.457a1.00039,1.00039,0,0,1,1.20605-.97851,8.00088,8.00088,0,0,0,6.22168-1.26758.99888.99888,0,0,1,1.14454,0A7.9976,7.9976,0,0,0,18.794,3.44727,1.00039,1.00039,0,0,1,20,4.42578v7.457a9.01643,9.01643,0,0,1-3.76855,7.32324l-3.6504,2.60743A.9986.9986,0,0,1,12,22Z"
        ></path>
        <path
          className="uim-primary"
          d="M10.84961,14.7002h0a.99927.99927,0,0,1-.707-.293L8.543,12.80664A.99989.99989,0,0,1,9.957,11.39258l.89258.89355L13.543,9.59277A.99989.99989,0,1,1,14.957,11.00684l-3.40039,3.40039A.99928.99928,0,0,1,10.84961,14.7002Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
