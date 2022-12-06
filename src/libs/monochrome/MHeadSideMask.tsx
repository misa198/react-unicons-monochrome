import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MHeadSideMask: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        width="1em"
      >
        <path
          className="uim-primary"
          d="M20.47638,9.287,12.3374,12H4.5a.99984.99984,0,0,0-.9375,1.34814l1.44727,3.89454c.01269.03418.02734.06689.043.09912A2.9843,2.9843,0,0,0,7.73633,19h4.76056l.00311.00049a.9992.9992,0,0,0,.31934-.05274l5.86456-1.978.61578-2.31861L13.5,16.60724V13.72089l6.634-2.21137.33283-1.25317A1.03147,1.03147,0,0,0,20.5,10V9.77246C20.5,9.60883,20.48633,9.44836,20.47638,9.287Z"
        ></path>
        <path
          className="uim-tertiary"
          d="M3.50769 12.89374c-.0011.01007.00061.01965-.00018.02972C3.5083 12.91357 3.50665 12.90363 3.50769 12.89374zM3.67871 12.4292A1.00115 1.00115 0 0 1 4.5 12h7.8374l8.139-2.713a7.67589 7.67589 0 0 0-7.24591-7.28357A7.35892 7.35892 0 0 0 7.77734 4.11719 7.44119 7.44119 0 0 0 5.5 9.46533L3.64844 12.47607c-.0055.00892-.00458.02-.00977.02906C3.653 12.48016 3.66217 12.45306 3.67871 12.4292z"
        ></path>
        <polygon
          className="uim-tertiary"
          points="13.5 13.721 13.5 16.607 19.3 14.651 20.467 10.256 20.134 11.51 13.5 13.721"
        ></polygon>
        <path
          className="uim-tertiary"
          d="M18.53711,17.52246l.20032-.75427-.05353.20154-5.86456,1.978a.9992.9992,0,0,1-.31934.05274L12.49689,19H8.5v2a.99974.99974,0,0,0,1,1h9a1.00064,1.00064,0,0,0,.96094-1.27734Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
