import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MHeartSign: React.FC<Props> = ({
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
          d="M12,5.73045h0a5.27206,5.27206,0,0,0-7.45583,0v0a5.27207,5.27207,0,0,0,0,7.45583l1.864,1.864,4.17766,4.17766a2,2,0,0,0,2.82843,0l6.04163-6.04162h0a5.272,5.272,0,0,0,0-7.45582l0,0a5.27206,5.27206,0,0,0-7.45583,0Z"
        ></path>
        <path
          className="uim-primary"
          d="M12,20.81348a2.98023,2.98023,0,0,1-2.12109-.87842l-6.042-6.04151A6.27255,6.27255,0,0,1,12,4.41357a6.27255,6.27255,0,0,1,8.16309,9.48l-6.042,6.04151A2.98023,2.98023,0,0,1,12,20.81348ZM8.272,5.18848a4.27,4.27,0,0,0-3.021,7.291L11.293,18.521a1.00142,1.00142,0,0,0,1.41406,0l6.042-6.04151a4.27233,4.27233,0,1,0-6.042-6.042.99964.99964,0,0,1-1.41406,0A4.25811,4.25811,0,0,0,8.272,5.18848Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
