import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MEnvelopeRedo: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
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
          d="M21.2,7.96774l-7.58,7.58008c-1.16755,1.17084-3.06319,1.17351-4.23404,0.00596C9.38397,15.5518,9.38199,15.54981,9.38,15.54782L1.8,7.96774c0.49464-1.04324,1.54544-1.70874,2.7-1.71h14C19.65456,6.259,20.70536,6.9245,21.2,7.96774z"
        ></path>
        <path
          className="uim-quaternary"
          d="M21.20001,7.96771L13.62,15.54779c-1.16754,1.1709-3.06317,1.17352-4.23401,0.00598C9.38397,15.55182,9.38196,15.5498,9.38,15.54779L1.79999,7.96771C1.60345,8.36945,1.50085,8.81055,1.5,9.25775v10c0.00488,1.65485,1.34515,2.99512,3,3h14c1.65485-0.00488,2.99512-1.34515,3-3v-10C21.49915,8.81055,21.39655,8.36945,21.20001,7.96771z"
        ></path>
        <path
          className="uim-primary"
          d="M21.5,8.25781h-3c-0.55228,0-1-0.44772-1-1s0.44772-1,1-1h2v-2c0-0.55228,0.44772-1,1-1s1,0.44772,1,1v3C22.5,7.81009,22.05228,8.25781,21.5,8.25781z"
        ></path>
        <path
          className="uim-primary"
          d="M17.5,13.25781c-2.76142,0.00152-5.00123-2.23582-5.00275-4.99725c-0.00152-2.76142,2.23582-5.00123,4.99725-5.00275c2.28233-0.00126,4.27584,1.54316,4.84486,3.75342c0.13618,0.5353-0.18736,1.07964-0.72266,1.21582s-1.07964-0.18736-1.21582-0.72266l0,0c-0.41682-1.60283-2.05407-2.56427-3.65689-2.14745s-2.56427,2.05407-2.14745,3.65689c0.34378,1.32197,1.53752,2.24457,2.90346,2.24398c0.7301-0.00308,1.43436-0.27056,1.98242-0.75293c0.41484-0.36438,1.04652-0.32348,1.41091,0.09136c0.36438,0.41484,0.32347,1.04652-0.09137,1.4109c-0.00137,0.0012-0.00274,0.0024-0.00411,0.00359C19.88568,12.81179,18.71397,13.25486,17.5,13.25781z"
        ></path>
      </svg>
    </Wrapper>
  );
};
