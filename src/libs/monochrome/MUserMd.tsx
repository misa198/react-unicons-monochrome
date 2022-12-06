import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MUserMd: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
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
          d="M17.99847,8.06429,6.00266,8.109,5.72559,4.78353A3.00021,3.00021,0,0,1,8.16965,1.482L8.959,1.33871a17.03145,17.03145,0,0,1,6.08616.00066l.78593.1428a3.00013,3.00013,0,0,1,2.44334,3.30136Z"
        ></path>
        <path
          className="uim-quaternary"
          d="M6.00891,8.109a5.99407,5.99407,0,0,0,11.98444-.04474Z"
        ></path>
        <path
          className="uim-primary"
          d="M17.19806,13.3847v.00007l-4.491,4.491a.99963.99963,0,0,1-1.41406,0l-4.491-4.491V13.3847a9.945,9.945,0,0,0-4.736,7.44031,1.00012,1.00012,0,0,0,.99414,1.1084H20.93994a1.00012,1.00012,0,0,0,.99414-1.1084A9.945,9.945,0,0,0,17.19806,13.3847Z"
        ></path>
        <path
          className="uim-tertiary"
          d="M15.69067,12.65405a6.01193,6.01193,0,0,1-7.382-.00012,10.004,10.004,0,0,0-1.50671.73084l4.491,4.491a.99963.99963,0,0,0,1.41406,0l4.491-4.491a10.005,10.005,0,0,0-1.507-.731Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
