import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MMedal: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        viewBox="0 0 24 24"
        width="1em"
      >
        <circle cx="10" cy="16" r="6" className="uim-primary"></circle>
        <path
          className="uim-quaternary"
          d="M18.91022,5.14844l-5.2002-3c-0.00055-0.00031-0.0011-0.00061-0.00171-0.00098c-0.47815-0.27539-1.08911-0.11102-1.3645,0.36719l-2.34186,4.0567l2.23413,3.86377c-0.00024-0.00012-0.00055-0.00018-0.00079-0.00031c1.35767,0.54596,2.46619,1.57312,3.12054,2.87128l3.92059-6.79144C19.55219,6.03619,19.38831,5.4248,18.91022,5.14844z"
        ></path>
        <path
          className="uim-tertiary"
          d="M10,10c0.79108,0,1.54449,0.15692,2.23608,0.43512L7.65625,2.51465C7.65613,2.5144,7.65594,2.51416,7.65582,2.51385C7.37958,2.03583,6.76807,1.87219,6.29004,2.14844l-5.2002,3C0.61176,5.4248,0.44788,6.03619,0.72363,6.51465l3.92035,6.79187C5.63141,11.34711,7.65607,10,10,10z"
        ></path>
      </svg>
    </Wrapper>
  );
};
