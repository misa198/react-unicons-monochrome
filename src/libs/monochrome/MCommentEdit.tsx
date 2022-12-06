import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCommentEdit: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M10.99978,22h-8a.99991.99991,0,0,1-.707-1.707l1.67481-1.67481A9.00076,9.00076,0,1,1,10.99978,22Z"
        ></path>
        <path
          className="uim-primary"
          d="M15.4248,12H13a.99943.99943,0,0,1-1-1V8.57617a.99928.99928,0,0,1,.293-.707L17.87012,2.293a.99962.99962,0,0,1,1.41406,0L21.707,4.71582a.99962.99962,0,0,1,0,1.41406L16.13184,11.707A.99929.99929,0,0,1,15.4248,12Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
