import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MAdobeAlt: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M14.4826,2.95886,22,20.80884v-17.85ZM2,2.95886V21.04114L9.42462,2.95886ZM9.06885,17.28253h2.78424L13.601,20.71631h2.53681L12.0387,9.873Z"
          data-name="Brand Logos"
        ></path>
      </svg>
    </Wrapper>
  );
};
