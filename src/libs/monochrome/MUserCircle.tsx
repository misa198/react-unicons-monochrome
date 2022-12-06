import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MUserCircle: React.FC<Props> = ({
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
        <circle cx="12" cy="10" r="4" className="uim-quaternary"></circle>
        <path
          className="uim-primary"
          d="M14.97552,12.65015C14.24292,13.47217,13.18774,14,12,14c-1.18762,0-2.24274-0.52771-2.97534-1.34961C6.62628,13.61182,4.80951,15.68524,4.21002,18.25C6.10425,20.61591,8.96924,21.99506,12,22c3.03076-0.00494,5.89575-1.38409,7.78998-3.75C19.17303,15.61072,17.31287,13.58978,14.97552,12.65015z"
        ></path>
        <path
          className="uim-tertiary"
          d="M9.02466,12.65039C8.39453,11.94348,8,11.02155,8,10c0-2.20917,1.79083-4,4-4s4,1.79083,4,4c0,1.02142-0.39447,1.94324-1.02448,2.65015c2.33069,0.93695,4.18561,2.94965,4.80786,5.57794c1.37164-1.70923,2.19659-3.8761,2.19659-6.2381c0-5.51178-4.4682-9.97998-9.97998-9.97998s-9.97998,4.4682-9.97998,9.97998c0,2.362,0.82495,4.52881,2.19659,6.23804C4.82141,15.67371,6.6333,13.60901,9.02466,12.65039z"
        ></path>
      </svg>
    </Wrapper>
  );
};
