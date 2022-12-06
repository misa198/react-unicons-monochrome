import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MEuro: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M19.1958,17.40527A5.96606,5.96606,0,0,1,14.45508,20c-2.67566,0-5.00873-2.00439-5.98065-5H14a1,1,0,0,0,0-2H8.05444a9.2066,9.2066,0,0,1,.00006-2H14a1,1,0,0,0,0-2H8.47455c.97143-2.99536,3.30462-5,5.98053-5A5.96606,5.96606,0,0,1,19.1958,6.59473a1.00022,1.00022,0,0,0,1.6084-1.18946A7.94344,7.94344,0,0,0,14.45508,2c-3.752,0-6.97376,2.83936-8.06665,7H4a1,1,0,0,0,0,2H6.04663C6.01843,11.33228,6,11.666,6,12c0,.33423.01843.668.04657,1H4a1,1,0,0,0,0,2H6.38818c1.09357,4.16113,4.31519,7,8.0669,7a7.94344,7.94344,0,0,0,6.34912-3.40527,1.00022,1.00022,0,0,0-1.6084-1.18946Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
