import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MSick: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        width="1em"
      >
        <circle cx="12" cy="12" r="10" className="uim-tertiary"></circle>
        <path
          className="uim-primary"
          d="M15.999,17a.99413.99413,0,0,1-.59863-.2002L14.667,16.25l-.73437.5498a.9961.9961,0,0,1-1.19922,0L12,16.25l-.7334.5498a.9999.9999,0,0,1-1.20019-1.5996l1.334-1a.9961.9961,0,0,1,1.19922,0l.7334.5498.73437-.5498a.9961.9961,0,0,1,1.19922,0l1.333,1A.99993.99993,0,0,1,15.999,17Z"
        ></path>
        <path
          className="uim-primary"
          d="M13.332,17a.99413.99413,0,0,1-.59863-.2002L12,16.25l-.7334.5498a.9961.9961,0,0,1-1.19922,0L9.333,16.25l-.7334.5498a.99961.99961,0,1,1-1.19922-1.5996l1.333-1a.9961.9961,0,0,1,1.19922,0l.73437.5498.7334-.5498a.9961.9961,0,0,1,1.19922,0l1.334,1A1.00032,1.00032,0,0,1,13.332,17Z"
        ></path>
        <circle cx="15" cy="10" r="1" className="uim-primary"></circle>
        <circle cx="9" cy="10" r="1" className="uim-primary"></circle>
      </svg>
    </Wrapper>
  );
};
