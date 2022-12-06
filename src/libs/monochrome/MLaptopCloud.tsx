import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MLaptopCloud: React.FC<Props> = ({
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
          d="M10,10H4.5C3.11921,9.99993,1.99991,8.88053,1.99998,7.49974c0.00005-1.02791,0.62923-1.95103,1.58596-2.32689C4.0426,3.01159,6.16484,1.62974,8.32611,2.0864c1.18934,0.2513,2.19985,1.02984,2.74616,2.11575c1.54651,0.59088,2.32121,2.32359,1.73032,3.8701C12.35872,9.23398,11.24364,10.00099,10,10z"
        ></path>
        <path
          className="uim-quaternary"
          d="M17,6h-4.18658c0.23199,0.6496,0.2547,1.37744-0.0108,2.07227C12.3587,9.23401,11.24365,10.00098,10,10H4.5C4.32874,10,4.16162,9.98236,4,9.94952V17c0,0.55231,0.44769,1,1,1h14c0.55231,0,1-0.44769,1-1V9C20,7.34314,18.65686,6,17,6z"
        ></path>
        <path
          className="uim-primary"
          d="M3,16h18c0.55228,0,1,0.44772,1,1v2c0,1.65685-1.34315,3-3,3H5c-1.65685,0-3-1.34315-3-3v-2C2,16.44772,2.44772,16,3,16z"
        ></path>
      </svg>
    </Wrapper>
  );
};
