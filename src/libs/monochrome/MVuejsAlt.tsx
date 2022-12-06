import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MVuejsAlt: React.FC<Props> = ({
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
        <polygon
          className="uim-tertiary"
          points="12.018 19.151 4.315 6 7.138 6 12.024 14.407 16.871 6 19.68 6"
        ></polygon>
        <path
          className="uim-primary"
          d="M14.38,4.00128l-2.37433,3.95599L9.62213,4.00128l-8.7973-0.00085l11.19666,19.11511L23.16022,4.00079L14.38,4.00128z M12.01801,19.151L4.315,6h2.823l4.88599,8.40698L16.87097,6h2.80902L12.01801,19.151z"
        ></path>
      </svg>
    </Wrapper>
  );
};
